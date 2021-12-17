import { Link } from 'react-router-dom';
import React from 'react';

export default function Teams({ team: { id, name, city, state } }) {
  return (
    <article className="team">
      <Link to={`/teams/${id}`}>
        <p>Name: {name}</p>
      </Link>
      <p>City: {city}</p>
      <p>State: {state}</p>
    </article>
  );
}
