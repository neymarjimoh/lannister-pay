require("dotenv").config();
export const PORT = process.env.PORT || "8080";
export const REDIS_PORT = process.env.REDIS_PORT || "6379";
export const REDIS_HOST = process.env.REDIS_HOST || "localhost";
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD;