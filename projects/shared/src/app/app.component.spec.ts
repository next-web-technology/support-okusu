import { AppComponent } from './app.component';
import { render } from '@testing-library/angular';

describe('AppComponent', () => {
  it('should create the app', async () => {
    const fixture = await render(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'shared' title`, async () => {
    const fixture = await render(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('shared');
  });

  xit('should render title', async () => {
    const fixture = await render(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'shared app is running!',
    );
  });
});
