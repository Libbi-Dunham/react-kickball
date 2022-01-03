import { Link } from 'react-router-dom';
import React from 'react';

export default function Teams({ team: { id, name, city, state, players } }) {
  return (
    <article className="team">
      <Link to={`/teams/${id}`}></Link>
      <h2>Name: {name}</h2>
      <h3>City: {city}</h3>
      <h3>State: {state}</h3>
      <ul className="player-list">
        {players.map((player) => (
          <Link key={player.id} to={`/players/${player.id}`}>
            {player.name}
          </Link>
        ))}
      </ul>
    </article>
  );
}
