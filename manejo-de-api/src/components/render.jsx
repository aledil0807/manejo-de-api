function ListOfPlayers ({ playersTeamsEvents }) {
  return (
    <section className="players-list">
      {
        playersTeamsEvents.map(player => (
          <article className="player-card" key={player.id}>
            <header className="player-header">
              <h3 className="player-name">{player.name}</h3>
              <img className="player-img" src={player.img} alt={player.name} />
            </header>
            <section className="player-info">
              <ul className="player-details">
                {player.team && <li className="player-team"><strong>Equipo:</strong> {player.team}</li>}
                {player.position && <li className="player-position"><strong>Posición:</strong> {player.position}</li>}
                {player.nacionality && <li className="player-nacionality"><strong>Nacionalidad:</strong> {player.nacionality}</li>}
                {player.dateBorn && <li className="player-dateBorn"><strong>Fecha de nacimiento:</strong> {player.dateBorn}</li>}
                {player.status && <li className="player-status"><strong>Estado:</strong> {player.status}</li>}
                {player.gender && <li className="player-gender"><strong>Género:</strong> {player.gender}</li>}
                {player.date && <li className="player-date"><strong>Fecha del evento:</strong> {player.date}</li>}
              </ul>
            </section>
          </article>
        ))
      }
    </section>
  )
}

function ListOfTeams ({ playersTeamsEvents }) {
    return (
        <section className="teams-list">
            {
                playersTeamsEvents.map(playerTeamEvent => (
                    <article className="team-card" key={playerTeamEvent.id}>
                        <header className="team-header">
                            <h3 className="team-name">{playerTeamEvent.name}</h3>
                            <img className="team-img" src={playerTeamEvent.img} alt={playerTeamEvent.name} />
                        </header>
                        <div className="team-info">
                            <ul className="team-leagues">
                                {playerTeamEvent.league && <li className="team-league">{playerTeamEvent.league}</li>}
                                {playerTeamEvent.league2 && <li className="team-league">{playerTeamEvent.league2}</li>}
                                {playerTeamEvent.league3 && <li className="team-league">{playerTeamEvent.league3}</li>}
                                {playerTeamEvent.league4 && <li className="team-league">{playerTeamEvent.league4}</li>}
                                {playerTeamEvent.league5 && <li className="team-league">{playerTeamEvent.league5}</li>}
                            </ul>
                            <p className="team-stadium"><strong>Estadio:</strong> {playerTeamEvent.stadium}</p>
                            <p className="team-nickname"><strong>Apodo:</strong> {playerTeamEvent.nickname}</p>
                            <p className="team-location"><strong>Ubicación:</strong> {playerTeamEvent.location}</p>
                            <p className="team-description">{playerTeamEvent.descriptionES}</p>
                        </div>
                    </article>
                ))
            }
        </section>
    )
}

function ListOfEvents ({ playersTeamsEvents }) {
    return (
        <section className="events-list">
            {
                playersTeamsEvents.map(event => (
                    <article className="event-card" key={event.id}>
                        <header className="event-header">
                            <h3 className="event-name">{event.name}</h3>
                            <p className="event-date"><strong>Fecha:</strong> {event.date}</p>
                        </header>
                        <ul className="event-details">
                            {event.league && <li className="event-league"><strong>Liga:</strong> {event.league}</li>}
                            {event.season && <li className="event-season"><strong>Temporada:</strong> {event.season}</li>}
                            {event.homeTeam && <li className="event-homeTeam"><strong>Equipo local:</strong> {event.homeTeam}</li>}
                            {event.awayTeam && <li className="event-awayTeam"><strong>Equipo visitante:</strong> {event.awayTeam}</li>}
                            {(event.homeScore !== null && event.homeScore !== undefined) && <li className="event-homeScore"><strong>Marcador local:</strong> {event.homeScore}</li>}
                            {(event.awayScore !== null && event.awayScore !== undefined) && <li className="event-awayScore"><strong>Marcador visitante:</strong> {event.awayScore}</li>}
                            {event.location && <li className="event-location"><strong>Ubicación:</strong> {event.location}</li>}
                        </ul>
                        <div className="event-images">
                            {event.imgHomeTeam && <img className="event-imgHomeTeam" src={event.imgHomeTeam} alt={event.homeTeam} />}
                            {event.imgAwayTeam && <img className="event-imgAwayTeam" src={event.imgAwayTeam} alt={event.awayTeam} />}
                        </div>
                    </article>
                ))
            }
        </section>
    )
}

function NoResults () {
  return (
    <p>No se encontraron coincidencias con esta busqueda</p>
  )
}

export function Render({ playersTeamsEvents, category }) {
    console.log(category)
  if (!playersTeamsEvents || playersTeamsEvents.length === 0) {
    return <NoResults />;
  }

  if (category === 'Teams' ) {
    return <ListOfTeams playersTeamsEvents={playersTeamsEvents} />;
  }

  if (category === 'Events' ) {
    return <ListOfEvents playersTeamsEvents={playersTeamsEvents} />;
  }

  if (category === 'Players' ) {
    return <ListOfPlayers playersTeamsEvents={playersTeamsEvents} />;
  }



  
}