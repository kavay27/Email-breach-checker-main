import { Component } from '@angular/core';
import { BreachCheckComponent } from './breach-check/breach-check.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BreachCheckComponent],
  template: `<app-breach-check></app-breach-check>`
})
export class AppComponent {}
