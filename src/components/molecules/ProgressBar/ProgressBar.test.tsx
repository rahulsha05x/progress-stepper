import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBar from './ProgressBar';
import { stepsWithText } from '../../../constants';

describe('ProgressBarWrapper', () => {
  test('Renders ProgressBar wrapper', () => {
    const children = <li>Child example</li>;
    render(
      <ProgressBar steps={stepsWithText} activeStep={4}>
        {children}
      </ProgressBar>
    );

    expect(screen.getByTestId('progress-bar')).toMatchSnapshot();
  });
});
