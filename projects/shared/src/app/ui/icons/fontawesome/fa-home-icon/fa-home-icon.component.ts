import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'shared-fa-home-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: ` <fa-icon [icon]="iconDefinition"></fa-icon> `,
  styles: [],
})
export class FaHomeIconComponent {
  iconDefinition = faHome;
}
