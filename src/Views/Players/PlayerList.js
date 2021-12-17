import { useEffect, useState } from 'react';
import Player from '../../Components/Player/Players';
import { getPlayers } from '../../services/PlayerRoute';
import { Link } from 'react-router-dom';

export default function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const playerData = await getPlayers();
      setPlayers(playerData);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>Names of Players</h1>
      <ul className="player-list">
        {players.map((player) => (
          <Link key={player.id} to={`/players/${player.id}`}>
            {player.name}
          </Link>
        ))}
      </ul>
    </>
  );
}
