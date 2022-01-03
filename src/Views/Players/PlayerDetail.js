import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Player from '../../Components/Player/Players';
import { getPlayerById } from '../../services/PlayerRoute';

export default function PlayersDetail() {
  const { id } = useParams();
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPlayerById(id).then(({ data }) => setPlayers(data));
    setLoading(false);
  }, [id]);
  if (loading) return <h1>loading</h1>;

  return (
    <>
      <Player player={players} />
    </>
  );
}
