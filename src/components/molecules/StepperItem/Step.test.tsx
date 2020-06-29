import React from 'react';
import { render, screen } from '@testing-library/react';
import Step from './Step';

describe('Step Component', () => {
  test('Renders Step component', () => {
    render(<Step />);
    const stepElement = screen.getByTestId('step');
    expect(stepElement.nodeName).toBe('LI');
    expect(stepElement).toMatchSnapshot();
    expect(stepElement).toHaveClass('progress-step');
  });
  test('Renders Step component with custom class', () => {
    render(<Step className="customClass" />);
    const stepElement = screen.getByTestId('step');
    expect(stepElement).toHaveClass('progress-step', 'customClass');
  });
  test('Renders Step component with child elements', () => {
    const childElement = <div>Child one</div>;
    const childElement2 = <div>Child two</div>;
    render(
      <Step
        className="customClass"
        color="yellow"
        completed
        content="Test step"
      >
        {childElement}
        {childElement2}
      </Step>
    );
    const stepElement = screen.getByTestId('step');
    expect(stepElement).toHaveClass('progress-step', 'customClass');
  });
});
