declare module 'express';
declare module 'cors';
declare module 'pg';
declare module 'express-serve-static-core' {
    interface Request {
        user?: any;
    }
}