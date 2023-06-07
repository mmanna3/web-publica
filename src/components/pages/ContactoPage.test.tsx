import { ContactoPage } from './ContactoPage';
import { cleanup, render } from '@testing-library/react';

describe('ContactoPage', () => {
  afterEach(cleanup);

  it('should render ContactoPage', (): void => {
    render(<ContactoPage />);
  });
});
