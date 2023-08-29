import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the app', async () => {
    const fixture = await render(AppComponent);
    const componentInstance = fixture.debugElement.componentInstance;
    expect(componentInstance).toBeTruthy();
  });

  it(`should have the 'lp' title`, async () => {
    const fixture = await render(AppComponent);
    const componentInstance = fixture.debugElement.componentInstance;
    expect(componentInstance.title).toBe('lp');
  });

  it('should render title', async () => {
    const fixture = await render(AppComponent);
    fixture.detectChanges();
    expect(screen.findByText('lp app is running!')).toBeTruthy();
  });
});
