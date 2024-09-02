export const EnvConfiguration = () => ({
    NODE_ENV: process.env.NODE_ENV || 'development',
    DB_FILE_NAME:process.env.DB_FILE_NAME,
})