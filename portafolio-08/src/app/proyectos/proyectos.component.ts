import { Component } from '@angular/core';
import { ProyectosDataService } from './service/proyectos-data.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  constructor(private proyectosDataService: ProyectosDataService){

  }

  get data(){
    return this.proyectosDataService.data;
  }
  getURI(nombre: string){
    return encodeURI(nombre);
  }
}
