import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { TycComponent } from './Componentes/footer/anexo/tyc/tyc.component';
import { AvisoComponent } from './Componentes/footer/anexo/aviso/aviso.component';
import { TallasComponent } from './Componentes/footer/anexo/tallas/tallas.component';
import { EnvioComponent } from './Componentes/footer/anexo/envio/envio.component';
import { ContactoComponent } from './Componentes/navbar/contacto/contacto.component';
import { TenisComponent } from './Componentes/tenis/tenis.component';

//servicio
import { TenisServices } from './Componentes/app.services';


//ruta
import { APP_ROUTING } from './app.router';
import { TeniComponent } from './Componentes/teni/teni.component';
import { BuscadorComponent } from './Componentes/buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    TycComponent,
    AvisoComponent,
    TallasComponent,
    EnvioComponent,
    ContactoComponent,
    TenisComponent,
    TeniComponent,
    BuscadorComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgxPaginationModule
  ],
  providers: [TenisServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
