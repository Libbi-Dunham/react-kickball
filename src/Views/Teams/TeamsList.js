import { useEffect, useState } from 'react';
// import Team from '../../Components/Team/Teams';
import { getTeams } from '../../services/TeamRoute';
import { Link } from 'react-router-dom';

export default function TeamsList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const teamData = await getTeams();
      setTeams(teamData);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Names of Teams</h1>
      <ul className="team-list">
        {teams.map((team) => (
          <Link key={team.id} to={`/teams/${team.id}`}>
            Names
          </Link>
          //   <li>
          //     <Team team={team} />
          //   </li>
        ))}
      </ul>
    </>
  );
}
