import { Link } from 'react-router-dom';
import React from 'react';

export default function Teams({ team: { id, name, city, state } }) {
  return (
    <article className="team">
      <Link to={`/teams/${id}`}></Link>
      <p>Name: {name}</p>
      <p>City: {city}</p>
      <p>State: {state}</p>
    </article>
  );
}
