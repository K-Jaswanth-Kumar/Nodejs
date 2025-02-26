require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    DB_URL: process.env.DB_URL,
    JWT_SECRET_KEY:process.env.JWT_SECRET_KEY
}