import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from './abc.component';
import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  {
    path: 'abc',
    component: AbcComponent
  },
  {
    path: 'xyz',
    component: XyzComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbcRoutingModule { }
