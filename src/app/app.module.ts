import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule } from '@angular/forms';

//Angular Components
import { AppComponent } from './app.component';


//Kendo UI Modules

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MenuModule } from '@progress/kendo-angular-menu';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { AppRoutingModule } from './modules/routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home/home.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { WallComponent } from './components/home/wall/wall.component';















@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    WallComponent
  ],
  imports: [

    //Angular Modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    //Kendo UI Modules
    ButtonsModule,
    ChartsModule,
    DateInputsModule,
    DialogsModule,
    DropDownsModule,
    GridModule,
    InputsModule,
    LabelModule,
    LayoutModule,
    MenuModule,
    NotificationModule,
    TreeViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
