import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TenisServices,Tenis } from '../app.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
tenis:Tenis[]=[];
termino!:string;
public page!:number;

constructor(private _tenisServices:TenisServices,
  private activatedRoute:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino'];
      this.tenis =this._tenisServices.buscarTenis(params['termino'])})
  }
  buscarTenis(termino:string){
    //console.log(termino);
    this.router.navigate(['/buscar',termino])
  }

}
