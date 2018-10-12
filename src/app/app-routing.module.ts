import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'onetime',
    pathMatch: 'full'
  },
  {
    path: 'onetime',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'recurring',
    loadChildren: './recurring/recurring.module#RecurringPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
