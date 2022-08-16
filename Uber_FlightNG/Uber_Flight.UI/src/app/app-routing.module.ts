import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './flight/index/index.component';

const routes: Routes = [
  {path: 'flight', redirectTo: 'flight/index', pathMatch: 'full'},
  {path: 'flight/index', component: IndexComponent},
  {path: 'passenger/index', component: IndexComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
