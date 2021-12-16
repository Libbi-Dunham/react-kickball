import { useEffect, useState } from 'react';
import Player from '../../Components/Player/Players';
import { getPlayers } from '../../services/PlayerRoute';
import { Link } from 'react-router-dom';

export default function PlayerList() {
  return (
    <ul>
      <h1>Names of Players</h1>
      <p>
        <Link to={`/players/:id`}>Player Details</Link>
      </p>
    </ul>
  );
}
