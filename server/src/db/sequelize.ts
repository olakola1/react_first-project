// import { Sequelize } from 'sequelize';
//
// const sequelize = new Sequelize(
//     process.env.DB_NAME || 'recipes_db',
//     process.env.DB_USER || 'postgres',
//     process.env.DB_PASSWORD || 'mysecretpassword',
//     {
//         host: process.env.DB_HOST || 'localhost',
//         port: parseInt(process.env.DB_PORT || '5432'),
//         dialect: 'postgres',
//         logging: false,
//         pool: {
//             max: 5,
//             min: 0,
//             acquire: 30000,
//             idle: 10000
//         }
//     }
// );
//
// export default sequelize;