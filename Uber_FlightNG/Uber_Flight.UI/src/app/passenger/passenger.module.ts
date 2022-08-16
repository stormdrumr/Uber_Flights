import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PassengerRoutingModule } from './passenger-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PassengerRoutingModule
  ]
})
export class PassengerModule { }
