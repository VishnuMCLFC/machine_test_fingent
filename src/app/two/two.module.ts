import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { TwoComponent } from './two.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TwoComponent
  ],
  imports: [
    CommonModule,
    TwoRoutingModule,
    HttpClientModule
  ]
})
export class TwoModule { }
