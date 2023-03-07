import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Airport } from '../model/airportsModel';

const AppDataSource = new DataSource({
    type: 'oracle',
    host: '0',
    port: 1521,
    username: '0',
    password: '0',
    database: 'xe',
    entities: [Airport],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});

export default AppDataSource;