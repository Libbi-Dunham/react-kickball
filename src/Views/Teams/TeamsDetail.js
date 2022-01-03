import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Team from '../../Components/Team/Teams';
import { getTeamById } from '../../services/TeamRoute';

export default function TeamsDetail() {
  const { id } = useParams();
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamById(id);
      setTeams(data.data);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    getTeamById(id).then(({ data }) => setTeams(data));
  }, [id]);

  return (
    <>
      <li key={teams.id}>
        <Team team={teams} />
      </li>
    </>
  );
}
