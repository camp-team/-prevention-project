import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizeComponent } from './quize/quize.component';

const routes: Routes = [
  {
    path: '',
    component: QuizeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizeRoutingModule {}
