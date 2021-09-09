import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { OneComponent } from './one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OneComponent
  ],
  imports: [
    CommonModule,
    OneRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OneModule { }
