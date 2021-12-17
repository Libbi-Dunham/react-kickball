import { Link } from 'react-router-dom';

export default function Team({ team: { id, name, city, state } }) {
  return (
    <article className="team">
      <Link to={`teams/${id}`} />
      <p>City: {city}</p>
      <p>State: {state}</p>
      <p>Name: {name}</p>
    </article>
  );
}
