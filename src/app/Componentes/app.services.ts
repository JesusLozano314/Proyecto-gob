import{Injectable} from "@angular/core"
@Injectable()
export class TenisServices{
    //private tenis:any[]=[
        private tenis:Tenis[]=[
        {
            nombre: "Dunk Low Pine Green",
            desc:"Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo.Debido al proceso de teñido utilizado, este producto no debe entrar en contacto con agua.",
            img:"assets/img/nike1.jpg",
            precio:"$24,229",
            marca:"Nike"
        },
        {
            nombre: "BAPE STA de A BATHING APE",
            desc:"Logo BAPE STA™ característico, logo en relieve en la parte posterior, puntera redonda, cierre con agujetas en la parte delantera, parche del logo en la lengüeta, plantilla con logo y suela de goma. Material: Cuero. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo.",
            img:"assets/img/nike2.jpg",
            precio:"$14,366",
            marca:"Nike"
        },
        {
            nombre: "Air Jordan 1 Retro High OG Chicago Lost and Found",
            desc:"Blanco, negro, rojo, piel de becerro, detalle del logo Swoosh característico, logo Air Jordan Wings característico, puntera redonda, cierre con agujetas en la parte delantera, parche del logo en la lengüeta, plantilla con logo y suela de goma. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo..",
            img:"assets/img/nike3.jpg",
            precio:"$10,162",
            marca:"Nike"
        },
        {
            nombre: "Air Jordan 3 SP J Balvin",
            desc:"Cuero, motivo Jumpman característico, puntera redonda, cierre con agujetas en la parte delantera, logo bordado en la lengüeta, logo en el contrafuerte y suela de goma. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo..",
            img:"assets/img/nike4.jpg",
            precio:"$15,285",
            marca:"Nike"
        },
        {
            nombre: "Air Jordan 4 Thunder",
            desc:"Negro, amarillo, gamuza, motivo Jumpman característico, puntera redonda, cierre con agujetas en la parte delantera, parche del logo en la lengüeta, plantilla con logo y suela de goma. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo..",
            img:"assets/img/nike5.jpg",
            precio:"$7,928",
            marca:"Nike"
        },
        {
            nombre: "Air Jordan 1 High OG SP de Jordan x Travis Scott",
            desc:"Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo.",
            img:"assets/img/nike6.jpg",
            precio:"$48,621",
            marca:"Nike"
        },
        {
            nombre: "Air Jordan 1 Low OG Black Toe",
            desc:"Blanco/negro, rojo oscuro, cuero, logo Air Jordan Wings característico, detalle del logo Swoosh característico, panel en contraste, puntera redonda, cierre con agujetas en la parte delantera, parche del logo en la lengüeta, plantilla con logo y suela plana de goma. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo..",
            img:"assets/img/nike7.jpg",
            precio:"$3,698",
            marca:"Nike"
        },
        {
            nombre: "Campus de adidas x Bodega",
            desc:"",
            img:"assets/img/adidas1.jpg",
            precio:"$2,936",
            marca:"Adidas"
        },
        {
            nombre: "Samba de adidas x Wales Bonner",
            desc:"Plata, cuero, acabado de charol, efecto metalizado, logo estampado en el lateral, detalle característico de 3 franjas, logo estampado en la lengüeta , lengüeta oversize , puntera redonda, cierre con agujetas en la parte delantera y suela plana de goma. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo..",
            img:"assets/img/adidas2.jpg",
            precio:"$12,526",
            marca:"Adidas"
        },
        {
            nombre: "Forum Buckle Low White de adidas x Bad Bunny",
            desc:"Blanco crema, gris claro, piel de becerro, gamuza de becerro, detalle característico de 3 franjas, puntera redonda, cierre con agujetas en la parte delantera, parche del logo en la lengüeta, cierre autoadherente en la parte delantera, plantilla con logo y suela de goma. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo..",
            img:"assets/img/adidas3.jpg",
            precio:"$4,512",
            marca:"Adidas"
        },
        {
            nombre: "Ozelia",
            desc:"Parche del logo en la lengüeta, puntera redonda, cierre con agujetas en la parte delantera y suela plana de goma.",
            img:"assets/img/adidas4.jpg",
            precio:"$2,410",
            marca:"Adidas"
        },
        {
            nombre: "HU NMD de adidas x Pharrell Williams",
            desc:"Tenis HU NMD de adidas x Pharrell Williams de color color verde claro y verde oscuro de adidas by Pharrell Williams con puntera redonda, suela plana de goma, cierre con agujetas en la parte delantera, plantilla con logo y estructura tejida. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo.",
            img:"assets/img/adidas5.jpg",
            precio:"$3,698",
            marca:"Adidas"
        },
        {
            nombre: "Yeezy Foam Runner Carbon",
            desc:"Negro, espuma, detalle de abertura, puntera redonda y estilo slip-on. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo..",
            img:"assets/img/adidas6.jpg",
            precio:"$4,749",
            marca:"Adidas"
        },
        {
            nombre: "Country OG",
            desc:"Blanco, piel de becerro, detalle de franja lateral de monofilamento característica, logo estampado en la lengüeta , diseño a paneles, puntera redonda, cierre con agujetas en la parte delantera, plantilla con logo y suela de goma.",
            img:"assets/img/adidas7.jpg",
            precio:"$2,882",
            marca:"Adidas"
        },
        {
            nombre: "Chuck 70 de Converse x Off-White",
            desc:"Tenis altas Chuck 70 de Converse x Off-White en lona de color blanco de Converse con puntera redonda, al tobillo, suela de goma y agujetas en la parte delantera.",
            img:"assets/img/converse1.jpg",
            precio:"$22,022",
            marca:"Converse"
        },
        {
            nombre: "Chuck 70 High de Converse x CDG",
            desc:"Parche del logo a un lado, estampado de corazón característico, costura en contraste, puntera redonda, cierre con agujetas en la parte delantera, diseño por el tobillo, plantilla con logo y suela plana de goma. Material: Goma. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo.",
            img:"assets/img/converse2.jpg",
            precio:"$2,550",
            marca:"Converse"
        },
        {
            nombre: "Chuck Taylor Hi All-Star Lift",
            desc:"Motivo de corazón, parche del logo a un lado, puntera redonda, cierre con agujetas en la parte delantera, diseño por el tobillo y suela gruesa de goma. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo..",
            img:"assets/img/converse3.jpg",
            precio:"$3,698",
            marca:"Converse"
        },
        {
            nombre: "Run Star",
            desc:"Suela Run Star Hike característica, cierre con agujetas en la parte delantera, puntera redonda, parche lateral de estrella característico, suela dentada de goma, lengüeta en la parte posterior y detalle de ojales. Material: tela.",
            img:"assets/img/converse4.jpg",
            precio:"$2,522",
            marca:"Converse"
        },
        {
            nombre: "Chuck 70 High de Converse x CDG",
            desc:"Parche del logo a un lado, estampado de corazón característico, costura en contraste, puntera redonda, cierre con agujetas en la parte delantera, diseño por el tobillo, plantilla con logo y suela plana de goma. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo.",
            img:"assets/img/converse5.jpg",
            precio:"$2,580",
            marca:"Converse"
        },
        {
            nombre: "All-Star Disrupt Hi de Converse x The Soloist",
            desc:"Detalle de parche, estampado de eslogan, puntera redonda, cierre con agujetas en la parte delantera, diseño por el tobillo, lengüeta en la parte posterior, plantilla con logo y suela de goma. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo.",
            img:"assets/img/converse6.jpg",
            precio:"$4,907",
            marca:"Converse"
        },
        {
            nombre: "Chuck 70",
            desc:"Tenis Chuck 70 de color blanco de Converse con puntera redonda, suela de goma y cierre con cordones en la parte delantera.",
            img:"assets/img/converse7.jpg",
            precio:"$8,191",
            marca:"Converse"
        },
        {
            nombre: "LaMelo Ball de Puma x Rick and Morty MB.01",
            desc:"Logo estampado en el lateral, puntera redonda, cierre con agujetas en la parte delantera, plantilla con logo y suela de goma. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo..",
            img:"assets/img/puma1.jpg",
            precio:"$10,950",
            marca:"Puma"
        },
        {
            nombre: "Clyde Q3 de PUMA x Rhuigi",
            desc:"Azul, blanco crema, gamuza, logo Formstrip , puntera redonda, cierre con agujetas en la parte delantera, logo grabado en la lengüeta, plantilla con logo y suela de goma. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo..",
            img:"assets/img/puma2.jpg",
            precio:"$2,863",
            marca:"Puma"
        },
        {
            nombre: "RS-X Toys",
            desc:"Tenis RS-X Toys de Puma con puntera de almendra, cierre con cordón, paneles en contraste y suela dentada de goma. Estos estilos son suministrados por un marketplace de zapatillas premium, el cual ofrece el calzado más codiciado y difícil de encontrar de todo el mundo",
            img:"assets/img/puma3.jpg",
            precio:"$4,644",
            marca:"Puma"
        },
        {
            nombre: "RS-X",
            desc:"Negro, capitonado, acabado texturizado, diseño a paneles, logo en relieve en la parte posterior, parche del logo en la lengüeta, lengüeta en la parte posterior, puntera redonda, cierre con agujetas en la parte delantera, plantilla con logo y suela gruesa de goma.",
            img:"assets/img/puma4.jpg",
            precio:"$3,275",
            marca:"Puma"
        },
        {
            nombre: "Suede VTG",
            desc:"Puntera redonda, suela plana de goma, cierre con agujetas en la parte delantera y plantilla con logo. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo.",
            img:"assets/img/puma5.jpg",
            precio:"$2,121",
            marca:"Puma"
        },
        {
            nombre: "Velophasis Luxe Sport",
            desc:"Cuero, diseño a paneles, puntera redonda, cierre con agujetas en la parte delantera, logo estampado en la lengüeta y suela gruesa. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo..",
            img:"assets/img/puma6.jpg",
            precio:"$3,199",
            marca:"Puma"
        },
        {
            nombre: "Variant Nitro IL",
            desc:"Hueso, tejido CORDURA® impermeable, diseño a paneles, puntera redonda, cierre con agujetas en la parte delantera, logo en el contrafuerte y suela gruesa de goma. Estos estilos son suministrados por un marketplace de tenis, el cual ofrece los artículos más codiciados y difíciles de encontrar de todo el mundo.",
            img:"assets/img/puma7.jpg",
            precio:"$5,563",
            marca:"Puma"
        }
    ];
    constructor(){
        console.log("Este es un mensaje de prueba")
    }

    //getTenis():any[]{
      //  return this.tenis;
  //  }

  getTenis():Tenis[]{
    return this.tenis;
  }

  getTeni(idx:number){
    return this.tenis[idx];
  }

  buscarTenis(termino: string): Tenis[] {
    let tenisArr: Tenis[] = [];
    termino = termino.toLocaleLowerCase();
    for (let teni of this.tenis) {
        let nombre = teni.nombre.toLocaleLowerCase();
        let marca = teni.marca.toLocaleLowerCase();
        if (nombre.includes(termino) || marca.includes(termino)) {
            tenisArr.push(teni);
        }
    }
    return tenisArr;
}
 
}

export interface Tenis{
    nombre:string;
    desc:string;
    img:string;
    precio:string;
    marca:string;
  }
  