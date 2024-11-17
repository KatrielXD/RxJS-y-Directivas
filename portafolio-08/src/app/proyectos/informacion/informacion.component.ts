import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosDataService } from '../service/proyectos-data.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit{

  parametro: string = "";
  
  proyectoData: any = {};

  constructor(private activatedRoute: ActivatedRoute,
     private router: Router,
    private proyectoDataService: ProyectosDataService,    
  ){

    let id = "";

    activatedRoute.params.subscribe(({id: nombreProyecto}) => {
      id = nombreProyecto;
    });

  this.parametro = decodeURI(id);

  }
  ngOnInit(){
     this.proyectoData = this.proyectoDataService.getProyecto(this.parametro);
  }

  goProyecto(){
    this.router.navigate(["/proyectos"]);
  }
}
