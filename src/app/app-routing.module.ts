import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'donate',
        pathMatch: 'full'
    },
    {
        path: 'donate',
        loadChildren: './home/home.module#HomePageModule'
    },
/*
    {
        path: 'recurring',
        loadChildren: './recurring/recurring.module#RecurringPageModule'
    },
*/
    {
        path: 'unsubscribe',
        loadChildren: './unsubscribe/unsubscribe.module#UnsubscribePageModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
