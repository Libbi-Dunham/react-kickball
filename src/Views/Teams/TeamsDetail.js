import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Team from '../../Components/Team/Teams';
import { getTeamById } from '../../services/TeamRoute';
import { Link } from 'react-router-dom';

export default function TeamsDetail() {
  const { id } = useParams();
  const [teams, setTeams] = useState(null);

  useEffect(() => {
    getTeamById(id).then(({ data }) => setTeams(data));
  }, [id]);

  return (
    <h1>Team</h1>

    //   <Team team={teams} />
    //   <Link className="home-detail" to={`/`}>
    //     Home
    //   </Link>
  );
}
