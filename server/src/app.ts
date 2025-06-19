import express, { Request, Response, NextFunction } from 'express';
import router from './routes/recipe';
import cors from 'cors';

const app = express();

// Middleware для отключения кеширования API
const noCacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
};

// Настройки CORS
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

// Парсинг JSON и URL-encoded данных
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Применяем noCacheMiddleware только к GET /api/recipes
app.get('/api/recipes', noCacheMiddleware);

// основной роутер
app.use('/api', router);

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});