import { Component, OnInit } from '@angular/core';
import { SidebarsService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor( public sidebar: SidebarsService) { }

  ngOnInit() {
  }

}
