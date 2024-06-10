const dotenv = require('dotenv').config()

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_HOST: process.env.HOST || 'localhost',
    DB_USER: process.env.USER || 'root',
    DB_PASSWORD: process.env.PASSWORD || 'jJ15983328@',
    DATABASE: process.env.DATABASE || 'localPetFinder',
    DB_PORT: process.env.DB_PORT || 3306
}