import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha',
  template: ` <div>{{ fecha | date: 'dd-MM-YYYY' }}</div> `,
  styles: [],
})
export class FechaComponent {
  public fecha = new Date();
}
