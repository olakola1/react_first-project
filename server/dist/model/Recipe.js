"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = exports.Recipe = void 0;
const sequelize_1 = require("sequelize");
const node_process_1 = require("node:process");
const readline = __importStar(require("readline"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const dbName = node_process_1.env.SUBD_DB_NAME || 'recipes_db';
const dbUser = node_process_1.env.SUBD_DB_USER || 'postgres';
const dbPass = node_process_1.env.SUBD_DB_PASS || 'mysecretpassword';
const dbHost = node_process_1.env.SUBD_DB_HOST || 'localhost';
const dbDialect = node_process_1.env.SUBD_DB_DIALECT || 'postgres';
const syncDatabase = (node_process_1.env.SUBD_DB_SYNC || 'no') === 'yes';
const sequelizeOptions = {
    timestamps: false,
};
class Recipe extends sequelize_1.Model {
    static initialize(sequelize) {
        this.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: sequelize_1.DataTypes.STRING,
                allowNull: false
            },
            ingredients: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            time: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false
            },
            image: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            isFavorite: {
                type: sequelize_1.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            }
        }, {
            sequelize: sequelize,
            tableName: 'recipes',
            ...sequelizeOptions
        });
    }
}
exports.Recipe = Recipe;
class Database {
    constructor() {
        this.sequelize = new sequelize_1.Sequelize(dbName, dbUser, dbPass, {
            host: dbHost,
            dialect: dbDialect,
            logging: console.log
        });
        this.setupEventHandlers();
        this.initializeModels();
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    initializeModels() {
        Recipe.initialize(this.sequelize);
        if (syncDatabase) {
            this.syncDatabase();
        }
    }
    async syncDatabase() {
        try {
            await this.sequelize.sync({ alter: true });
            console.log('Database synchronized successfully');
        }
        catch (error) {
            console.error('Error synchronizing database:', error);
        }
    }
    setupEventHandlers() {
        if (node_process_1.platform === "win32") {
            const rl = readline.createInterface({
                input: node_process_1.stdin,
                output: node_process_1.stdout
            });
            rl.on("SIGINT", () => {
                process.emit("SIGINT");
            });
        }
        process.on("SIGINT", async () => {
            try {
                await this.sequelize.close();
                console.log('Disconnected From DB Success');
                process.exit(0);
            }
            catch (error) {
                console.error('Disconnected From DB Error:', error);
                process.exit(1);
            }
        });
    }
    async testConnection() {
        try {
            await this.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}
exports.Database = Database;
const database = Database.getInstance();
database.testConnection();
