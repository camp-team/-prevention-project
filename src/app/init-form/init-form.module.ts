import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitFormRoutingModule } from './init-form-routing.module';
import { InitFormComponent } from './init-form/init-form.component';


@NgModule({
  declarations: [InitFormComponent],
  imports: [
    CommonModule,
    InitFormRoutingModule
  ]
})
export class InitFormModule { }
