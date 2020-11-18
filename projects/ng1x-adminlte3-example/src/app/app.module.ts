import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ng1xLTE3LayoutModule, ng1xLTE3LayoutStoreFactory} from 'ng1x-adminlte3';
import { LayoutMainComponent } from './layouts/main/main.component';
import { layoutConfig } from './config/layout.config';

@NgModule({
  declarations: [
    AppComponent,
    LayoutMainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Ng1xLTE3LayoutModule,
    ng1xLTE3LayoutStoreFactory(layoutConfig),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
