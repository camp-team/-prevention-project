import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitFormComponent } from './init-form/init-form.component';

const routes: Routes = [
  {
    path: '',
    component: InitFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InitFormRoutingModule {}
