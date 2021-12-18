import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Team from './TeamsDetail';

test('renders the team details', () => {
  const container = render(
    <MemoryRouter>
      <Team
        city="Portland"
        state="OR"
        id="1"
        name="Bridge City Sneakers"
        players={[{ name: 'Hans Olo' }]}
      />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
