"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const recipe_1 = __importDefault(require("./routes/recipe"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server = (0, express_1.default)();
server.get('/api', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../client/dist', 'index.html'));
});
// Middleware для отключения кеширования API
const noCacheMiddleware = (req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
};
// Настройки CORS
server.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
// Парсинг JSON и URL-encoded данных
server.use(express_1.default.json({ limit: '10mb' }));
server.use(express_1.default.urlencoded({ limit: '10mb', extended: true }));
// Применяем noCacheMiddleware только к GET /api/recipes
server.get('/api/recipes', noCacheMiddleware);
// основной роутер
server.use('/api', recipe_1.default);
const PORT = process.env.PORT;
server.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use`);
        process.exit(1);
    }
});
if (process.env.NODE_ENV === 'production') {
    const __dirname = path_1.default.resolve();
    server.use(express_1.default.static(path_1.default.join(__dirname, '../frontend/dist')));
    server.get('*', (req, res) => {
        res.sendFile(path_1.default.join(__dirname, '../frontend/dist', 'index.html'));
    });
}
exports.default = server;
