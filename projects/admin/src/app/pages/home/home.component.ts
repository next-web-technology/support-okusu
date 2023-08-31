import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaArrowRightFromBracketIconComponent } from '@/web/src/app/ui/icons/fontawesome/fa-arrow-right-from-bracket-icon/fa-arrow-right-from-bracket-icon.component';
import { FaArrowRightToBracketIconComponent } from '@/web/src/app/ui/icons/fontawesome/fa-arrow-right-to-bracket-icon/fa-arrow-right-to-bracket-icon.component';
import { FaBarsIconComponent } from '@/web/src/app/ui/icons/fontawesome/fa-bars-icon/fa-bars-icon.component';
import { FaGoogleIconComponent } from '@/web/src/app/ui/icons/fontawesome/fa-google/fa-google-icon.component';
import { FaHomeIconComponent } from '@/web/src/app/ui/icons/fontawesome/fa-home-icon/fa-home-icon.component';
import { FaQrcodeIconComponent } from '@/web/src/app/ui/icons/fontawesome/fa-qrcode-icon/fa-qrcode-icon.component';
import { FaUserIconComponent } from '@/web/src/app/ui/icons/fontawesome/fa-user-icon/fa-user-icon.component';
import { FaUserPlusIconComponent } from '@/web/src/app/ui/icons/fontawesome/fa-user-plus-icon/fa-user-plus-icon.component';

@Component({
  selector: 'admin-home',
  standalone: true,
  imports: [
    CommonModule,
    FaArrowRightFromBracketIconComponent,
    FaArrowRightToBracketIconComponent,
    FaBarsIconComponent,
    FaGoogleIconComponent,
    FaHomeIconComponent,
    FaQrcodeIconComponent,
    FaUserIconComponent,
    FaUserPlusIconComponent,
  ],
  template: `
    <div class="prose">
      <h1>Hello world!</h1>
      <p>
        <web-fa-arrow-right-from-bracket-icon></web-fa-arrow-right-from-bracket-icon>
        <web-fa-arrow-right-to-bracket-icon></web-fa-arrow-right-to-bracket-icon>
        <web-fa-bars-icon></web-fa-bars-icon>
        <web-fa-google-icon></web-fa-google-icon>
        <web-fa-home-icon></web-fa-home-icon>
        <web-fa-qrcode-icon></web-fa-qrcode-icon>
        <web-fa-user-icon></web-fa-user-icon>
        <web-fa-user-plus-icon></web-fa-user-plus-icon>
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
