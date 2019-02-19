import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarsService {
  menu: any = [{
    titulo: 'Principal',
    icono: 'mdi mdi-gauge',
    submenu: [
      { titulo: 'Dashboard', url: '/dashboard' },
      { titulo: 'Progress bar', url: '/progress' },
      { titulo: 'Graficas', url: '/graficas1' },
    ]
  }];

  constructor() { }
}
