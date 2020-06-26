import React from 'react';
import { render, screen } from '@testing-library/react';
import Line from './Line';

describe('Line', () => {
  test('Renders Line component', () => {
    render(<Line color="red" />);
    expect(screen.getByTestId('line')).toHaveClass('line');
  });
  test('Renders line with red for completed', () => {
    render(<Line color="red" completed />);
    expect(screen.getByTestId('line')).toHaveStyle('background-color:red');
  });
  test('Renders line with grey for active', () => {
    render(<Line color="red" active />);
    expect(screen.getByTestId('line')).toHaveStyle('background-color:#ccc');
  });
  test('Renders line with custom classes', () => {
    render(<Line color="red" className="customClass1 customClass2" />);
    expect(screen.getByTestId('line')).toHaveClass(
      'customClass1',
      'customClass2'
    );
  });
});
