import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizeRoutingModule } from './quize-routing.module';
import { QuizeComponent } from './quize/quize.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [QuizeComponent],
  imports: [
    CommonModule,
    QuizeRoutingModule,
    MatStepperModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class QuizeModule { }
