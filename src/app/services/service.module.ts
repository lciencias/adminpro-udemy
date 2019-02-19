import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService, SidebarsService, SharedService  } from './service.index';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SidebarsService,
    SharedService
  ]
})
export class ServiceModule { }
