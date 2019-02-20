import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { retry, map, filter } from 'rxjs/operators';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  constructor() {
    this.subscription = this.regresaObervsable()
    // .pipe(
    //     retry(2)
    // )
    .subscribe(
        numero => console.log('Subs:  ', numero),
        error => console.error(' Error en el obs ', error ),
        () => console.log('El observador termino')
    );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('la pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObervsable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval( () => {
        contador++;
        const salida = {
          valor : contador
        };

        observer.next( salida );
        // if ( contador === 3 ) {
        //   clearInterval( intervalo );
        //   observer.complete();
        // }
        // if ( contador === 2 ) {
        //   // clearInterval( intervalo );
        //   observer.error('Auxilio');
        // }
      }, 1000);
    }).pipe(
      map(respuesta => respuesta.valor),
      filter( (valor, index) => {
        if ( (valor % 2 ) === 1  ) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}