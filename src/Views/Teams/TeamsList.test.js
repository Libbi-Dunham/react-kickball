import { render } from '@testing-library/react';
import TeamsList from './TeamsList';

test('renders the teams', () => {
  const container = render(<TeamsList teams={[]} />);
  expect(container).toMatchSnapshot();
});
