import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudCutreService } from '../crud-cutre.service';
import { Animal } from '../Animal';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-AnimalForm',
  templateUrl: './AnimalForm.component.html',
  styleUrls: ['./AnimalForm.component.css']
})
export class AnimalFormComponent implements OnInit {
  edit:boolean=false
  animal:Animal={
    name:"",
    description:"",
    age:null,
    img:"",
    race:""
  }
  id = ""
  AnimalForm:FormGroup;
  constructor(private formBuilder:FormBuilder,private animalService:CrudCutreService,private router:Router, private activatedRoute:ActivatedRoute) {
    if(activatedRoute.snapshot.paramMap.get('id')){
      this.edit=true
      this.id=activatedRoute.snapshot.paramMap.get('id')
      this.animal = this.animalService.Animals[this.id]
    }
    this.AnimalForm = this.formBuilder.group({
      name: [this.animal.name,Validators.required],
      description:[this.animal.description,Validators.required],
      age:[this.animal.age,Validators.required],
      img:[this.animal.img,Validators.required],
      race:[this.animal.race,Validators.required]
    });

  }

  ngOnInit() {
  }
  onSubmit(){
    if(this.AnimalForm.invalid){
      return 
    }
    const {value} = this.AnimalForm
    if(this.edit){
      this.animalService.putAnimal(this.id,value)
      return this.router.navigate(['/'])
    }
    this.animalService.postAnimals(value)
    return this.router.navigate(['/'])
  }
}
