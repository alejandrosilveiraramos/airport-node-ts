import express from 'express';
import AppDataSource from './config/database';
import { AirportController } from './controller/airportsController';

AppDataSource.initialize().then(() => {

    console.log('Database connetion success');

    const app = express();

    app.use(express.json());

    app.listen(8000);


    // Routes CRUD --Start
    app.post('/airport', new AirportController().create);
    app.get('/airport/:id', new AirportController().read);
    // Routes CRUD --End
    

}).catch(e => console.log('[ERROR] connetion Databas failure', e))


