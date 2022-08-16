import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [  
  {path: '', redirectTo: 'passenger/index', pathMatch: 'full'},
  {path: 'passenger/index', component: IndexComponent},
  {path: 'passenger/create', component: CreateComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassengerRoutingModule { }
