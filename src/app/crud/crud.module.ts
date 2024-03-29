import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { CrudRoutingModule } from './crud-routing.module';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [HomeComponent, DetailsComponent, CreateComponent, UpdateComponent],
  imports: [
    CommonModule,
    CrudRoutingModule,
    HttpClientModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule
  

  ]
  

})
export class CrudModule { }
