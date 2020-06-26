import React from 'react';
import { render, screen } from '@testing-library/react';
import Circle from './CircleIcon';

describe('Circle', () => {
  test('Renders Circle component', () => {
    render(
      <Circle color="red" completed icon={<i className="fa fa-check" />} />
    );
    expect(screen.getByTestId('circle')).toHaveStyle('border-radius:50%');
    expect(screen.getByTestId('circle')).toHaveClass('circle');
    expect(screen.getByTestId('circle')).toHaveStyle('background-color:red');
  });
  test('Render squared steps', () => {
    render(
      <Circle
        color="red"
        squared
        completed={false}
        active
        icon={<i className="fa fa-check" />}
      />
    );
    expect(screen.getByTestId('circle')).toHaveClass('circle');
    expect(screen.getByTestId('circle')).toHaveStyle('background-color:none');
    expect(screen.getByTestId('circle')).toHaveStyle('border-radius:0px');
  });
  test('Render steps with custom class', () => {
    render(
      <Circle
        color="red"
        squared
        completed={false}
        active
        className={'customClass1 customClass2'}
        icon={<i className="fa fa-check" />}
      />
    );

    expect(screen.getByTestId('circle')).toHaveClass(
      'customClass1',
      'customClass2'
    );
  });
  test('Render squared steps', () => {
    render(
      <Circle
        color="red"
        squared
        completed={false}
        active
        icon={<i className="fa fa-check" />}
      />
    );

    expect(screen.getByTestId('circle')).toHaveStyle('background-color:none');
    expect(screen.getByTestId('circle')).toHaveStyle('border-color:red');
  });
});
