import { Request, response, Response } from 'express';
import  AppDataSource  from '../config/database';
import { Airport } from '../model/airportsModel';

export class AirportController {

// Create Airport --Start
    async create(req: Request, res: Response) {
        const { nameAirport, addressAirport } : {
            nameAirport: string, addressAirport: string
        } = req.body

        const  airport = new Airport();
        airport.nameAirport = nameAirport;
        airport.addressAirport = addressAirport;

        const repo = AppDataSource.getRepository(Airport);
        await repo.save(airport)

        res.json(airport)

    };
// Create Airport --End
// Read Airport --Start
    async read(req: Request, res: Response){
        const id = req.params.id;

        const repo = AppDataSource.getRepository(Airport);
        const airport = await repo.findOneBy({ codeAirport: parseInt(id, 10)});

        res.json(airport)
    }
// Read Airport --End

// Update Airport --Start
    async update(req: Request, res: Response){
        const id = req.params.id;
        const { nameAirport, addressAirport } = req.body;

        const repo = AppDataSource.getRepository(Airport);
        const airport = await repo.findOneBy({ codeAirport: parseInt(id, 10)});
        airport.nameAirport = nameAirport;
        airport.addressAirport = addressAirport;

        await repo.save(airport);
        res.json(airport);
    }

// Update Airport --End

// Delete Airport --Start
   async delete(req: Request, res: Response){
        const id = req.params.id;

        const repo = AppDataSource.getRepository(Airport);
        await repo.delete(id);

        res.json({ message: `Success to delete Airport code Airport: ${id}`})

   }
// Delete Airport --End
//   Read all Airports --Start
async readAll(req: Request, res: Response){
    
    const repo = AppDataSource.getRepository(Airport);
    const airports = await repo.find();

    res.json(airports)
   } 
//   Read all Airports --End 
};


