import React from 'react';
import { Link } from 'react-router-dom';

export default function Player({ Player: { name, position, team_id } }) {
  return (
    <div className="player">
      <Link to={`/players/${team_id}`}>
        <p>Name: {name}</p>
      </Link>
      <p> Position: {position}</p>
      <p> Team: {team_id} </p>
    </div>
  );
}
