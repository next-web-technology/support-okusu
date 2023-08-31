import { FaArrowRightFromBracketIconComponent } from './fa-arrow-right-from-bracket-icon.component';
import { render } from '@testing-library/angular';

describe('FaArrowRightFromBracketIconComponent', () => {
  it('should create', async () => {
    const fixture = await render(FaArrowRightFromBracketIconComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});
