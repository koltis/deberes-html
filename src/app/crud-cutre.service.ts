import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from './Animal';

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
        this.Animals = this.Animals.map((Animal,index)=>{
           
            if(index==id){
                return value
            }
            return Animal
    })
    }
    getAnimals(){
         this.http.get<Animal[]>('./assets/Animals.json').subscribe(
            ress=>{this.Animals = ress},
            err=>{console.log(err)}
         )
    }
}
