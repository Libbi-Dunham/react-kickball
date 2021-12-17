import React from 'react';

export default function Player({ Player: { name, position, team_id } }) {
  return (
    <div className="player">
      {name} {position} {team_id}
    </div>
  );
}
