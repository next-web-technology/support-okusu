import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faQrcode } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'shared-fa-qrcode-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: ` <fa-icon [icon]="iconDefinition"></fa-icon> `,
  styles: [],
})
export class FaQrcodeIconComponent {
  iconDefinition = faQrcode;
}
