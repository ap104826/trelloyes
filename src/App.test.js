import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const fakeStore = {
    lists: []
  }
  const { getByText } = render(<App store={fakeStore} />)
  const headingElement = getByText('Trelloyes!')
  expect(headingElement).toBeInTheDocument()
})
