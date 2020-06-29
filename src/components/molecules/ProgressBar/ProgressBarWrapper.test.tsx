import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBarWrapper from './ProgressBarWrapper';

describe('ProgressBarWrapper', () => {
  test('Renders ProgressBar wrapper', () => {
    const children = <li>Child example</li>;
    render(
      <ProgressBarWrapper activeStep={1} orientation="vertical">
        {children}
      </ProgressBarWrapper>
    );
    expect(screen.getByTestId('progressBar-wrapper')).toMatchSnapshot();
    expect(screen.getByTestId('progressBar-wrapper')).toHaveClass(
      'progress-tracker',
      '--vertical'
    );
    expect(screen.getByTestId('progressBar-wrapper')).toContainHTML(
      '<li currentitemstatus="is-active" itemindex="0">Child example</li>'
    );
  });
  test('Renders ProgressBar wrapper', () => {
    const children = [<li>Child example</li>, <li>Child example2</li>];
    render(
      <ProgressBarWrapper activeStep={2}>
        {children[0]}
        {children[1]}
      </ProgressBarWrapper>
    );
    expect(screen.getByTestId('progressBar-wrapper')).toHaveClass(
      'progress-tracker',
      '--horizontal'
    );

    expect(screen.getByTestId('progressBar-wrapper')).toContainHTML(
      '<li currentitemstatus="is-completed" itemindex="0">Child example</li><li currentitemstatus="is-active" itemindex="1">Child example2</li>'
    );
  });
});
