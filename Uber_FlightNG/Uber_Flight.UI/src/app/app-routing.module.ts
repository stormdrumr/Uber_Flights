import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './flight/index/index.component';

const routes: Routes = [
  {path: 'music', redirectTo: 'music/index', pathMatch: 'full'},
  {path: 'music/index', component: IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
