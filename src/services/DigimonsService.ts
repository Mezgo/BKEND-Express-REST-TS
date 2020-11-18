import { DigimonI } from "../interfaces/DigimonInterfaces";
import { MonsterTypeI } from "../interfaces/MonsterTypeI";
const db = require('../db/Digimons.json');

module DigimonsService { 
    export function getAll(): Array<DigimonI> {
        const digimons: Array<DigimonI> = db;
        return digimons
    }
    export function get(id: number): DigimonI {
        const digimons: Array<DigimonI> = db;
        const digimon: Array<DigimonI> = digimons.filter(e => e.id === id);
        if (digimon.length < 1) {
            throw "No se encontró el digimon"
        }
        return digimon[0];
    }
    export function getName(name: string): Array<DigimonI>{
        const digimons: Array<DigimonI> = db;
        const digimon: Array<DigimonI> = digimons.filter(function (e) {
            return e.name.toLowerCase().indexOf(name.toLowerCase()) > -1
        })
        if (digimon.length < 1) {
            throw "No se encontró el digimon"
        }
        return digimon;
    }

    export function getType(type: string): Array<DigimonI>{
        const digimons: Array<DigimonI> = db
        const digimonType: Array<DigimonI>= []
        digimons.forEach(digimon => {
            const srch= digimon.type.filter(e => e.name.toLowerCase() === type)
            console.log(srch)
            if(srch.length>0){
                digimonType.push(digimon)
            }
        })

        if (digimonType.length < 1){
            throw "No se encontró el tipo"
        }
        return digimonType
    }

    export function getSW(name: string/* , type: string */): Array<DigimonI>{
       const digimons: Array<DigimonI> = db,
            stronger: Array<DigimonI> = [],
            weakier: Array<DigimonI> = []
        let digimonName: Array<DigimonI>= digimons.filter(function (e){
                return e.name.toLowerCase().indexOf(name.toLowerCase()) > -1
            })

       if(digimonName.length< 1){throw "No se encontró el digimon"}
       else{
           digimonName= digimonName.filter(function (e){
               const name=e.name,
                output= e.type.filter(t=>{
                    const type= t.name
                    digimons.forEach(digimon => {

                        const SW= digimon.type.filter(w=> {
                            for(let i=0; i<w.weakAgainst.length; i++){
                                const element= w.weakAgainst[i]
                                if(element.toString()==type){
                                    stronger.push(digimon)
                                }
                            }
                            for(let j=0; j<w.strongAgainst.length; j++){
                                const element2= w.strongAgainst[j]
                                console.log("fuerte ", element2,type)
                                if(element2.toString()==type){
                                    weakier.push(digimon)
                                }
                            }
                        })
                    })
                })
                return output
           })
       }
       return weakier
    }

   /*  export function add(ser ){
        let digimon: JSON  = function(e){
            let structure= {
                id: e.id,
                name: e.name,
                type: e.type,
                nameT: e.nameT,
                strongAgainst: e.strongAgainst,
                weakAgainst: e.weakAgainst
            }
        }
        
    } */

}

export default DigimonsService;
