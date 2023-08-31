import { render } from '@testing-library/angular';
import { FaArrowRightFromBracketIconComponent } from './fa-arrow-right-from-bracket-icon.component';

describe('FaArrowRightFromBracketIconComponent', () => {
  it('should create', async () => {
    const fixture = await render(FaArrowRightFromBracketIconComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
