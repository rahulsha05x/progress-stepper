import React from 'react';
import { render, screen } from '@testing-library/react';
import IconWrapper from './IconWrapper';

describe('IconWrapper', () => {
  test('Renders Icon wrapper', () => {
    const children = <div>Child example</div>;
    render(<IconWrapper>{children}</IconWrapper>);
    expect(screen.getByTestId('icon-wrapper')).toHaveClass('progress-marker');
    expect(screen.getByTestId('icon-wrapper')).toContainHTML(
      '<div>Child example</div>'
    );
  });
});
