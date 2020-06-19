import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//MODULOS
import { MaterialModule } from './modulos/material.module';

//FORMULARIOS
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//MODULO GOOGLE MAPS
import { GoogleMapsModule } from '@angular/google-maps';

// COMPONENTES PROPIOS 
import { ManagerscreenComponent } from './components/manager/managerscreen/managerscreen.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { MenuComponent } from './components/products/menu/menu.component';
import { ArticuloScreenComponent } from './components/manager/articulo-screen/articulo-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaArticuloScreenComponent } from './components/manager/categoria-articulo-screen/categoria-articulo-screen.component';
import { MedidaArticuloScreenComponent } from './components/manager/medida-articulo-screen/medida-articulo-screen.component';
import { ModalArticuloComponent } from './components/modales/modal-articulo/modal-articulo.component';
import { ModalCategoriaArticuloComponent } from './components/modales/modal-categoria-articulo/modal-categoria-articulo.component';
import { ModalMedidaArticuloComponent } from './components/modales/modal-medida-articulo/modal-medida-articulo.component';
import { MedidaPlatoScreenComponent } from './components/manager/medida-plato-screen/medida-plato-screen.component';
import { ModalMedidaPlatoComponent } from './components/modales/modal-medida-plato/modal-medida-plato.component';
import { ModalCategoriaPlatoComponent } from './components/modales/modal-categoria-plato/modal-categoria-plato.component';
import { CategoriaPlatoScreenComponent } from './components/manager/categoria-plato-screen/categoria-plato-screen.component';
import { PlatoScreenComponent } from './components/manager/plato-screen/plato-screen.component';
import { ModalCabeceraPlatoComponent } from './components/modales/modal-cabecera-plato/modal-cabecera-plato.component';

// IMPORTACIONES DE ANGULAR FIREBASE
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";

import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    LandingComponent,
    MenuComponent,
    ManagerscreenComponent,
    ArticuloScreenComponent,
    ModalArticuloComponent,
    ModalCategoriaArticuloComponent,
    ModalMedidaArticuloComponent,
    ModalMedidaPlatoComponent,
    CategoriaArticuloScreenComponent,
    MedidaArticuloScreenComponent,
    MedidaPlatoScreenComponent,
    ModalCategoriaPlatoComponent,
    CategoriaPlatoScreenComponent,
    PlatoScreenComponent,
    ModalCabeceraPlatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleMapsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
