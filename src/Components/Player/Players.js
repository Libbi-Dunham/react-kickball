import React from 'react';
import { Link } from 'react-router-dom';

export default function Player({ player }) {
  return (
    <div className="player">
      <Link to={`/players/${player.team_id}`}></Link>
      <h2>Name: {player.name}</h2>
      <h3> Position: {player.position}</h3>
      <h3> Team: {player.team_id} </h3>
    </div>
  );
}
