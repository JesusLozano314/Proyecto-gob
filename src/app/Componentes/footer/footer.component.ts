import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
anio:number
constructor(){
  var dataobj= new Date();
  var b = dataobj.getFullYear();
  this.anio=b;

}
}