import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home/home.component';

const appRoutes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

export const appRoutingProvider: any[] = [

];

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}