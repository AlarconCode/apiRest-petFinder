const dotenv = require('dotenv').config()

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_HOST: process.env.HOST || '127.0.0.1',
    DB_USER: process.env.USER,
    DB_PASSWORD: process.env.PASSWORD || 123456,
    DATABASE: process.env.DATABASE,
    DB_PORT: process.env.PORT || 3306,
}