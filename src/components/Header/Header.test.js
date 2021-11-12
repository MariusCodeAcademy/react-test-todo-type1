import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders Header with a title prop', () => {
  // Arrange
  render(<Header title='SomeTitle' />);

  //Assert
  const headerEl = screen.getByRole('heading', { name: 'SomeTitle' });
  expect(headerEl).toBeInTheDocument();
  // expect(headerEl).toHaveTextContent('SomeTitle');
});
