import { PokemonI } from "../interfaces/PokemonInterfaces";
import { MonsterTypeI } from "../interfaces/MonsterTypeI";
const db = require('../db/Pokemons.json');

module PokemonsService{
    export function getAll(): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        return pokemons
    }
    export function get(number: number): PokemonI {
        const pokemons: Array<PokemonI> = db;
        const pokemon: Array<PokemonI> = pokemons.filter(e => e.number === number);
        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        }
        return pokemon[0];
    }
    export function getName(name: string): Array<PokemonI>{
        const pokemons: Array<PokemonI> = db;
        const pokemon: Array<PokemonI> = pokemons.filter(function (e) {
            return e.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        })
        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        }
        return pokemon;
    }

    export function getType(type: string): Array<PokemonI>{
        const pokemons: Array<PokemonI> = db
        const pokemonType: Array<PokemonI>= []
        pokemons.forEach(pokemon => {
            const srch= pokemon.type.filter(e => e.name.toLowerCase() === type)
            console.log(srch)
            if(srch.length>0){
                pokemonType.push(pokemon)
            }
        })

        if (pokemonType.length < 1){
            throw "No se encontró el tipo"
        }
        return pokemonType
    }

    export function getSW(name: string): Array<PokemonI> {
        const pokemons: Array<PokemonI> = db;
        let matchesStrong: Array<PokemonI> = [];
        let matchesWeak: Array<PokemonI> = [];
        let pokemon: Array<PokemonI> = pokemons.filter(function (el) {
            const pokeName = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            const comparationName = el.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            return comparationName.toLowerCase().indexOf(pokeName.toLowerCase()) > -1;
        })

        if (pokemon.length < 1) {
            throw "No se encontró el pokemon"
        } else {
            pokemon = pokemon.filter(function (el) {
                const nombre = el.name;
                const status = el.type.filter(e => {
                    let tipo = e.name;
                    pokemons.forEach(pokemon => {
                        const comparation = pokemon.type.filter(z => {
                            for (let i = 0; i < z.weakAgainst.length; i++) {
                                const element = z.weakAgainst[i];
                                if (element.toString() == tipo) {
                                    matchesStrong.push(pokemon);
                                }
                            }
                            for (let j = 0; j < z.strongAgainst.length; j++) {
                                const element = z.strongAgainst[j];
                                if (element.toString() == tipo) {
                                    matchesWeak.push(pokemon);
                                }
                            }
                        })
                    })
                    matchesStrong.filter(name => {
                        const nameStrong = name.name;
                        matchesWeak.filter(name => {
                            const nameWeak = name.name;
                            throw `<b>Nombre:</b> ${nombre} <b>Tipo:</b> ${e.name}. <b>Es fuerte contra:</b> ${nameStrong}. <b>Es debil contra:</b> ${nameWeak}.`
                        })
                    })
                })
            });
            return pokemon;
        }
    }

    export function add(name: string): Array<PokemonI>{
        let newPoke= name.split("-")
       
        console.log(newPoke)

        throw `<b>Nombre:</b> ${newPoke[0]}. <b>Tipo:</b> ${newPoke[1]}. <b>Numero:</b> ${newPoke[2]}. <b>Es fuerte contra:</b> ${newPoke[3]}. <b>Es debil contra:</b> ${newPoke[4]}.`

    }
}

export default PokemonsService