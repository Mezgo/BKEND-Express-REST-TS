import { Request, Response } from "express";
import PokemonsService from "../services/PokemonsService";

export function getAll(_: any, res: Response) {
    const pokemons = PokemonsService.getAll();
    res.status(200).json(pokemons);
}

export function get(req: Request, res: Response) {
    try {
        const id = req.params.id && +req.params.id || undefined;
        if(!id){ throw "Se requiere el ID del digimon."}
        const pokemon = PokemonsService.get(id);
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).send(error);
    }
}

export function getName(req: Request, res: Response){
    try {
        const name= req.params.name && req.params.name || undefined;
        if(!name){ throw "Se requiere nombre del pokemon."}
        const pokemon= PokemonsService.getName(name)
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).send(error)
    }
}

export function getType(req: Request, res: Response){
    try {
        const type = req.params.type && req.params.type || undefined
        if(!type){ throw "Se requiere el tipo del pokemon."}
        const digimons = PokemonsService.getType(type)
        res.status(200).json(digimons)
    } catch (error) {
        res.status(400).send(error)
    }
}

export function getSW(req: Request, res: Response){
    try {
        const name= req.params.name && req.params.name || undefined;
        //const type= req.params.type && req.params.type || undefined;
        if(!name /* || !type */){ throw "Se requiere nombre del pokemon."}
        const pokemon= PokemonsService.getSW(name/* ,type */)
        res.status(200).json(pokemon);
    } catch (error) {
        res.status(400).send(error)
    }

}

export function add(req: Request, res: Response){
    try {
        const name= req.params.name && req.params.name || undefined;

        if(!name){
            throw "Fallo al añadir pokemon"
        }
        const añadir= PokemonsService.add(name)
        res.status(200).json(añadir)
    } catch (error) {
        res.status(400).send(error)
    }            
}