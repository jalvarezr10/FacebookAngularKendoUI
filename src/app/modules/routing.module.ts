import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

const appRoutes: Routes = [
    {
        path: '',
        component: AppComponent
    }
];

export const appRoutingProvider: any[] = [

];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}