import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'admin-home',
  standalone: true,
  imports: [CommonModule],
  template: ` <h1 class="text-3xl font-bold underline">Hello world!</h1> `,
  styles: [],
})
export class HomeComponent {}
