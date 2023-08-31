import { HomeComponent } from './home.component';
import { render } from '@testing-library/angular';

describe('HomeComponent', () => {
  it('should create', async () => {
    const fixture = await render(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
