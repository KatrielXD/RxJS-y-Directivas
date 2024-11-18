import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css']
})
export class ReactiveContainerComponent implements OnInit, OnDestroy{

  subscriptor: Subscription | null = null; 

  x: number = 0;
  y: number = 0;

  ngOnInit() {
      const obs = fromEvent<MouseEvent>(document.querySelector("#area")!, "mousemove");

    this.subscriptor = obs.subscribe((ev) => {
        console.log("evento");
        this.x = ev.clientX;
        this.y = ev.clientY;
      });

  }
  ngOnDestroy() {
      this.subscriptor?.unsubscribe();
  }

//   miIntervalo: Observable<number> = interval(1000).pipe(
//     map(value => value + 1),
//     filter((value) => value % 2 === 0),
//     take(6)
//      );

//      miSubscription: Subscription | null = null; 

//   constructor (){

// //   let numero = 0;

// //   const miObservable = new Observable<number>((observer) => {
// //     setInterval(() => {
     
// //       numero++;
// //       observer.next(numero);

// //      observer.complete();

// //       if(numero == 3) {
// //         observer.error("Número Erroneo");
// //       }

      
// //     }, 3000)
// //   });

// //   miObservable.subscribe({
// //     next: (result)=> {
// //       console.log(result);
// //       }, 
// //     error: (error) => {
// //         console.error(error);
// //       },
// //     complete: () => {
// //         console.log("Observable completado");
// //       }
// //   });

// // }
// }

// ngOnInit(){
//   this.miSubscription = this.miIntervalo.subscribe({
//     next: value => console.log(value), 
//     complete: () => console.log("Primeros seis números pares")
//   });
// }

// ngOnDestroy() {
//   this.miSubscription!.unsubscribe();
//     console.log("Componente destruido")
// }

}