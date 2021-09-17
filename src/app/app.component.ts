import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public proyectos = [
    { name: 'Aprender Angular', status: 1 },
    { name: 'Tener un buen trabajo', status: 0 },
  ];
  public color = 'brown';
  public value = 5;

  /*public get _value(): number {
    return this.value;
  }

  public set _value(arg: number) {
    this.value = arg;
  }*/

  public multiplo(cantidad: number): number {
    return cantidad * this.value;
  }

  public incrementar(): void {
    this.value++;
  }

  public reducir(): void {
    this.value--;
  }
}
