import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalddyComponent } from './walddy/walddy.component';
import { AplicacionRaulComponent } from './aplicacion-raul/aplicacion-raul.component';
import { AlvaroComponent } from './alvaro/alvaro.component';

@NgModule({
  declarations: [
    AppComponent,
    WalddyComponent,
    AplicacionRaulComponent,
    AlvaroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
