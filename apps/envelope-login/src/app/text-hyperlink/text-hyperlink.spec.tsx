import { render } from '@testing-library/react';

import TextHyperlink from './text-hyperlink';

describe('TextHyperlink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextHyperlink href="#">Test</TextHyperlink>);
    expect(baseElement).toBeTruthy();
  });
});
