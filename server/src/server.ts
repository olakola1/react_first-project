import express, { Request, Response, NextFunction } from 'express';
import router from './routes/recipe';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

interface NodeError extends Error {
    code?: string;
}

const server = express();

server.get('/api', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});
// Middleware для отключения кеширования API
const noCacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
};

// Настройки CORS
server.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

// Парсинг JSON и URL-encoded данных
server.use(express.json({ limit: '10mb' }));
server.use(express.urlencoded({ limit: '10mb', extended: true }));

// Применяем noCacheMiddleware только к GET /api/recipes
server.get('/api/recipes', noCacheMiddleware);

// основной роутер
server.use('/api', router);

const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);

}).on('error', (err: NodeError) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use`);
        process.exit(1);
    }
});

if (process.env.NODE_ENV === 'production') {
    const __dirname = path.resolve();
    server.use(express.static(path.join(__dirname, '../frontend/dist')));

    server.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
    });
}

export default server;