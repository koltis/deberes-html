import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AnimalListComponent } from './animalList/animalList.component';
import { CrudCutreService } from './crud-cutre.service';
import { AnimalFormComponent } from './AnimalForm/AnimalForm.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@NgModule({
   declarations: [
      AppComponent,
      NavBarComponent,
      AnimalListComponent,
      AnimalFormComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
   ],
   providers: [
      CrudCutreService,
      {
         provide: LocationStrategy,
         useClass: HashLocationStrategy
      }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
