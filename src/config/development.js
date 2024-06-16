require('dotenv').config();

export default  {
    PORT: process.env.PORT || 3000,
    BASE_URL: process.env.BASE_URL,
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT
};