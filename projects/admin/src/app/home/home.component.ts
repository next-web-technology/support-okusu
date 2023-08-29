import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'admin-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="prose">
      <h1>Hello world!</h1>
      <p>
        p tag test test test test test test test test test test test test test
        test test test test test test
      </p>
      <h2>H2 Test</h2>
      <p>
        p tag test test test test test test test test test test test test test
        test test test test test test
      </p>
      <h3>H3 Test</h3>
      <p>
        p tag test test test test test test test test test test test test test
        test test test test test test
      </p>
      <button class="prose btn-primary w-64 rounded-full">Button</button>
    </div>
  `,
  styles: [],
})
export class HomeComponent {}
