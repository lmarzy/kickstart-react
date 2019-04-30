import React from 'react';
import { render } from 'react-testing-library';

import { App } from './App';

test('App Component renders with toggle switch', () => {
  const wrap = render(<App />);

  expect(wrap.getByTestId('nav')).toBeTruthy();
});
