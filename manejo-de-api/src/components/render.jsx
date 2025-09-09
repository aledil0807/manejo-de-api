function ListOfPlayers ({ playersTeamsEvents }) {
  return (
    <ul className='players'>
      {
        playersTeamsEvents.map(playerTeamEvent => (
          <li className='player' key={playerTeamEvent.id}>
            <h3>{playerTeamEvent.name}</h3>
            <p>{playerTeamEvent.team}</p>
            <img src={playerTeamEvent.img} alt={playerTeamEvent.name} />
          </li>
        ))
      }
    </ul>
  )
}

function NoResults () {
  return (
    <p>No se encontraron coincidencias con esta busqueda</p>
  )
}

export function Render({ playersTeamsEvents }) {
    console.log(playersTeamsEvents)
  if (!playersTeamsEvents || playersTeamsEvents.length === 0) {
    return <NoResults />;
  }

  return <ListOfPlayers playersTeamsEvents={playersTeamsEvents} />;
}