import jest from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';

import { Button } from 'components/core/Button/Button';

const mockClick = jest.jest.fn();

describe('Button', () => {
  test('onClick', () => {
    render(<Button onClick={mockClick}>Click me</Button>);
    const button = screen.getByText('Click me');
    fireEvent.click(button);
    jest.expect(mockClick).toBeCalled();
  });
});
