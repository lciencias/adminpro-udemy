import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
    // console.log('Identificador:  ' + this.leyenda + '  progreso:  ' + this.progreso);
   }

  ngOnInit() {
  } 

  onChanges( newValue: number) {
    // let  elemHTML:any = document.getElementByName('progreso')[0];
    // console.log( elemHTML.value );

    console.log(newValue);
    if( newValue >= 100){
      this.progreso = 100;
    }else if (newValue <= 0){
      this.progreso = 0;
    }else {
      this.progreso = newValue;
    }
    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit( this.progreso );
    this.txtProgress.nativeElement.focus();
  }

  cambiarValor( valor: number) {
    if ( this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if ( this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit( this.progreso );
  }

}
