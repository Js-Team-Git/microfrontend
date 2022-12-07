import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbcComponent } from './abc.component';
import { XyzComponent } from './xyz/xyz.component';

const routes: Routes = [
  {
    path: 'page1',
    component: AbcComponent
  },
  {
    path: 'page2',
    component: XyzComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbcRoutingModule { }
