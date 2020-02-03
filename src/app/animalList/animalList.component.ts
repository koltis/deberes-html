import { Component, OnInit } from '@angular/core';
import { CrudCutreService } from '../crud-cutre.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-animalList',
  templateUrl: './animalList.component.html',
  styleUrls: ['./animalList.component.css']
})
export class AnimalListComponent implements OnInit {
  constructor(public animalsService:CrudCutreService,private router:Router) { 
  }

  ngOnInit() {
  }
  deleteAnimal(animal){
    this.animalsService.deleteAnimal(animal)
  }
  editAnimal(animal){
    const animalId=this.animalsService.Animals.indexOf(animal)
    this.router.navigate(['/edit',animalId])
  }
}
