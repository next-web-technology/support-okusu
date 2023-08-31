import { AppComponent } from './app.component';
import { render, screen } from '@testing-library/angular';

describe('AppComponent', () => {
  it('should create the app', async () => {
    const fixture = await render(AppComponent);
    const componentInstance = fixture.debugElement.componentInstance;
    expect(componentInstance).toBeTruthy();
  });

  it(`should have the 'web' title`, async () => {
    const fixture = await render(AppComponent);
    const componentInstance = fixture.debugElement.componentInstance;
    expect(componentInstance.title).toEqual('web');
  });

  it('should render title', async () => {
    const fixture = await render(AppComponent);
    fixture.detectChanges();
    expect(screen.findByText('web app is running!')).toBeTruthy();
  });
});
