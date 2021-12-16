import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import Home from './Views/Home/Home';
import TeamsDetail from './Views/Teams/TeamsDetail';
import TeamsList from './Views/Teams/TeamsList';
import PlayerDetail from './Views/Players/PlayerDetail';
import PlayerList from './Views/Players/PlayerList';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavLink to="/" data-testid="home">
            Home
          </NavLink>
          <NavLink to="/teams" data-testid="team-link">
            Teams
          </NavLink>
          <NavLink to="/players" data-testid="player-link">
            Players
          </NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/teams/:id">
            <TeamsDetail />
          </Route>
          <Route path="/players/:id">
            <PlayerDetail />
          </Route>
          <Route path="/teams">
            <TeamsList />
          </Route>
          <Route path="/players">
            <PlayerList />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
