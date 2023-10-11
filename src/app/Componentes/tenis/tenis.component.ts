import { Component, OnInit } from '@angular/core';
import { TenisServices,Tenis } from '../app.services';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.css']
})
export class TenisComponent {
//tenis:any[]=[];
tenis:Tenis[]=[];
termino!:string;
public page!:number;

constructor(private _tenisServices:TenisServices,
  private router:Router,private activatedRoute:ActivatedRoute){

  this.tenis = this._tenisServices.getTenis();
  console.log(this.tenis);
}
VerTeni(idx:number){
  this.router.navigate(['teni',idx]);


}
ngOnInit(): void {
  this.activatedRoute.params.subscribe(params =>{
    this.termino = params['termino'];
    this.tenis =this._tenisServices.buscarTenis(params['termino'])})
}

}
