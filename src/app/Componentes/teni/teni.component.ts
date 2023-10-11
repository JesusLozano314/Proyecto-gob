import { Component } from '@angular/core';
import { TenisServices } from '../app.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teni',
  templateUrl: './teni.component.html',
  styleUrls: ['./teni.component.css']
})
export class TeniComponent {
teni:any={};

constructor( private _tenisServices:TenisServices,
  private activatedRoute:ActivatedRoute){

    this.activatedRoute.params.subscribe(params=>
      this.teni = this._tenisServices.getTeni(params['id']))
  console.log(this.teni)
}
}
