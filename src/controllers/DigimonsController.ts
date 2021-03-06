import { Request, Response } from "express";
import DigimonsService from "../services/DigimonsService";

export function getAll(_: any, res: Response) {
    const digimons = DigimonsService.getAll();
    res.status(200).json(digimons);
}

export function get(req: Request, res: Response) {
    try {
        const id = req.params.id && +req.params.id || undefined;
        if(!id){ throw "Se requiere el ID del digimon."}
        const digimon = DigimonsService.get(id);
        res.status(200).json(digimon);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getName(req: Request, res: Response){
    try {
        const name= req.params.name && req.params.name || undefined;
        if(!name){ throw "Se requiere nombre del digimon."}
        const digimon= DigimonsService.getName(name)
        res.status(200).json(digimon);
    } catch (error) {
        res.status(400).send(error)
    }
}

export function getType(req: Request, res: Response){
    try {
        const type = req.params.type && req.params.type || undefined
        if(!type){ throw "Se requiere el tipo del digimon."}
        const digimons = DigimonsService.getType(type)
        res.status(200).json(digimons)
    } catch (error) {
        res.status(400).send(error)
    }
}

export function getSW(req: Request, res: Response){
    try {
        const name= req.params.name && req.params.name || undefined;
        //const type= req.params.type && req.params.type || undefined;
        if(!name /* || !type */){ throw "Se requiere nombre del digimon."}
        const digimon= DigimonsService.getSW(name/* ,type */)
        res.status(200).json(digimon);
    } catch (error) {
        res.status(400).send(error)
    }
}