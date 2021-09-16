import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'App demo jzapataa';

  public get cantidad(): number {
    return 2;
  }

  public get precio(): number {
    return 9;
  }
}
