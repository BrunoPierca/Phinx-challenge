import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
    type: 'sqlite',
    database: process.env.DB_FILE_NAME,
    entities: [`${__dirname}/../**/**.entity{.ts,.js}`],
    synchronize: process.env.NODE_ENV === 'development' ? true : false,
    logging: process.env.NODE_ENV === 'development',
    migrations: [`${__dirname}/../../db/migrations/*{.ts,.js}`],
}));