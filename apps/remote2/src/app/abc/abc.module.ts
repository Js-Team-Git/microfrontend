import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbcRoutingModule } from './abc-routing.module';
import { AbcComponent } from './abc.component';
import { XyzComponent } from './xyz/xyz.component';

@NgModule({
  declarations: [AbcComponent, XyzComponent],
  imports: [CommonModule, AbcRoutingModule],
})
export class AbcModule {}
