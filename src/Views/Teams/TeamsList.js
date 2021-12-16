import { useEffect, useState } from 'react';
import Team from '../../Components/Team/Teams';
import { getTeams } from '../../services/TeamRoute';
import { Link } from 'react-router-dom';

export default function TeamsList() {
  return (
    <ul>
      <h1>Names of Teams</h1>
      <p>
        <Link to={`/teams/:id`}>Team Details</Link>
      </p>
    </ul>
  );
}
