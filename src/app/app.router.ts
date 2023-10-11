import { RouterModule,Routes } from "@angular/router";

import { MenuComponent } from "./Componentes/menu/menu.component";
import { FooterComponent } from "./Componentes/footer/footer.component";
import { AvisoComponent } from "./Componentes/footer/anexo/aviso/aviso.component";
import { EnvioComponent } from "./Componentes/footer/anexo/envio/envio.component";
import { TallasComponent } from "./Componentes/footer/anexo/tallas/tallas.component";
import { TycComponent } from "./Componentes/footer/anexo/tyc/tyc.component";
import { NavbarComponent } from "./Componentes/navbar/navbar.component";
import { ContactoComponent } from "./Componentes/navbar/contacto/contacto.component";
import { TenisComponent } from "./Componentes/tenis/tenis.component";
import { TeniComponent } from "./Componentes/teni/teni.component";
import { BuscadorComponent } from "./Componentes/buscador/buscador.component";


const APP_ROUTES:Routes =[
    {path:'menu',component:MenuComponent},
    {path:'footer',component:FooterComponent},
    {path:'aviso',component:AvisoComponent},
    {path:'envio',component:EnvioComponent},
    {path:'tallas',component:TallasComponent},
    {path:'tyc',component:TycComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'tenis',component:TenisComponent},
    {path:'teni/:id',component:TeniComponent},
    {path:'buscar/:termino',component:BuscadorComponent},
    {path:'**',pathMatch:'full',redirectTo:'menu'}
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)