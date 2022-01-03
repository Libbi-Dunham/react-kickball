import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Team from '../../Components/Team/Teams';
import { getTeamById } from '../../services/TeamRoute';

export default function TeamsDetail() {
  const { id } = useParams();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeamById(id).then(({ data }) => setTeams(data));
  }, [id]);

  return (
    <>
      <ul>
        <li key={teams.id} style={{ listStyleType: 'none' }}>
          <Team team={teams} />
        </li>
      </ul>
    </>
  );
}
