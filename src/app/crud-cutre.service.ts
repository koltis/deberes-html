import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './Animal';
import { AnimalStore } from './AnimalStore';
import { of } from 'rxjs';

@Injectable()
export class CrudCutreService {
    Animals:Animal[] = []
    constructor(private http:HttpClient) {
        this.getAnimals()
    }
    postAnimals(animal){
        this.Animals.push(animal)
    }
    deleteAnimal(animal:Animal){
        this.Animals = this.Animals.filter(Animal=>Animal!=animal)
    }
    putAnimal(id,value){
        this.Animals = this.Animals.map((Animal,index)=> {
            if(index==id){
                return value
            }
            return Animal
        })
    }
    getAnimals(){
        of(AnimalStore).subscribe(
            ress=>{this.Animals = ress},
            err=>{console.log(err)}
        )
    }
}
