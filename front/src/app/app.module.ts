import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PremiosComponent } from './pages/premios/premios.component';
import { DesafiosComponent } from './pages/desafios/desafios.component';
import { ClasificacionComponent } from './pages/clasificacion/clasificacion.component';
import { PreguntaComponent } from './pages/pregunta/pregunta.component';
import { Pmodel1Component } from './components/pmodel1/pmodel1.component';
import { Pmodel2Component } from './components/pmodel2/pmodel2.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DashbordComponent,
    HeaderComponent,
    LoginComponent,
    PremiosComponent,
    DesafiosComponent,
    ClasificacionComponent,
    PreguntaComponent,
    Pmodel1Component,
    Pmodel2Component
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
