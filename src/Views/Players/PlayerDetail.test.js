import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Player from './PlayerDetail';

test('renders the player details', () => {
  const container = render(
    <MemoryRouter>
      <Player
        player={{
          position: 'Pitcher',
          name: 'Dwayne Elizondo Mountain Dew Herbert Camacho',
          team_id: '4',
        }}
      />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
