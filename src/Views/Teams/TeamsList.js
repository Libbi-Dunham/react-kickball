import { useEffect, useState } from 'react';
import Team from '../../Components/Team/Teams';
import { getTeams } from '../../services/TeamRoute';
import { Link } from 'react-router-dom';

export default function TeamsList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { teamData } = await getTeams();
      setTeams(teamData);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Names of Teams</h1>
      <p>
        <Link to={`/teams/:id`}>Team Details</Link>
      </p>
      <ul className="team-list">
        {teams.map((team) => (
          <li key={team.team_id}>
            <Team team={team} />
          </li>
        ))}
      </ul>
    </>
  );
}
