import { FaArrowRightFromBracketIconComponent } from '@/shared/src/app/ui/icons/fontawesome/fa-arrow-right-from-bracket-icon/fa-arrow-right-from-bracket-icon.component';
import { FaArrowRightToBracketIconComponent } from '@/shared/src/app/ui/icons/fontawesome/fa-arrow-right-to-bracket-icon/fa-arrow-right-to-bracket-icon.component';
import { FaBarsIconComponent } from '@/shared/src/app/ui/icons/fontawesome/fa-bars-icon/fa-bars-icon.component';
import { FaGoogleIconComponent } from '@/shared/src/app/ui/icons/fontawesome/fa-google/fa-google-icon.component';
import { FaHomeIconComponent } from '@/shared/src/app/ui/icons/fontawesome/fa-home-icon/fa-home-icon.component';
import { FaQrcodeIconComponent } from '@/shared/src/app/ui/icons/fontawesome/fa-qrcode-icon/fa-qrcode-icon.component';
import { FaUserIconComponent } from '@/shared/src/app/ui/icons/fontawesome/fa-user-icon/fa-user-icon.component';
import { FaUserPlusIconComponent } from '@/shared/src/app/ui/icons/fontawesome/fa-user-plus-icon/fa-user-plus-icon.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'web-home',
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
        <shared-fa-arrow-right-from-bracket-icon></shared-fa-arrow-right-from-bracket-icon>
        <shared-fa-arrow-right-to-bracket-icon></shared-fa-arrow-right-to-bracket-icon>
        <shared-fa-bars-icon></shared-fa-bars-icon>
        <shared-fa-google-icon></shared-fa-google-icon>
        <shared-fa-home-icon></shared-fa-home-icon>
        <shared-fa-qrcode-icon></shared-fa-qrcode-icon>
        <shared-fa-user-icon></shared-fa-user-icon>
        <shared-fa-user-plus-icon></shared-fa-user-plus-icon>
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
