import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng1xAdminlte3Module } from 'ng1x-adminlte3';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    Ng1xAdminlte3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
