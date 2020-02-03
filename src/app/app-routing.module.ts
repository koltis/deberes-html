import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animalList/animalList.component';
import { AnimalFormComponent } from './AnimalForm/AnimalForm.component';



const routes: Routes = [
  {path:'',component:AnimalListComponent},
  {path:'form',component:AnimalFormComponent},
  {path:'edit/:id',component:AnimalFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
