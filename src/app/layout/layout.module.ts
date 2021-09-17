import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { DesarrolladorComponent } from './desarrollador.component';
import { FechaComponent } from './fecha.component';
import { PieComponent } from './pie/pie.component';

@NgModule({
  declarations: [CabeceraComponent, PieComponent, FechaComponent, DesarrolladorComponent],
  imports: [CommonModule, RouterModule],
  exports: [CabeceraComponent, PieComponent, DesarrolladorComponent, FechaComponent],
})
export class LayoutModule {}
