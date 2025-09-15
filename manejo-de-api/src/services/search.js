export const searchInput = async ({ search, category}) => {
  console.log(search, category)
  if (search === '') return null

  const modifiedCategory = category.toLowerCase()
  console.log(modifiedCategory[0])

  

  try {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/123/search${modifiedCategory}.php?${modifiedCategory[0]}=${search}`)
    const json = await response.json()
    const players = json.player
    const teams = json.teams
    const events = json.event
    if (modifiedCategory === 'teams') {
      

      return teams?.map(team => ({
        id: team.idTeam,
        name: team.strTeam,
        league: team.strLeague,
        league2: team.strLeague2,
        league3: team.strLeague3,
        league4: team.strLeague4,
        league5: team.strLeague5,
        stadium: team.strStadium,
        nickname: team.strKeywords,
        location: team.strLocation,
        descriptionES: team.strDescriptionES,
        img: team.strBadge,
        
      }))
    }

    if (modifiedCategory === 'events') {
      
      return events?.map(event => ({
        id: event.idEvent,
        name: event.strEvent,
        league: event.strLeague,
        season: event.strSeason,
        homeTeam: event.strHomeTeam,
        awayTeam: event.strAwayTeam,
        homeScore: event.intHomeScore,
        awayScore: event.intAwayScore,
        date: event.dateEvent,
        imgHomeTeam: event.strHomeTeamBadge,
        imgAwayTeam: event.strAwayTeamBadge,
        location: event.strVenue
      }))
    }

    if (modifiedCategory === 'players') {
      
      return players?.map(player => ({
        id: player.idPlayer,
        name: player.strPlayer,
        team: player.strTeam,
        position: player.strPosition,
        nacionality: player.strNationality,
        dateBorn: player.dateBorn,
        status: player.strStatus,
        gender: player.strGender,
        date: player.dateEvent,
        img: player.strThumb,
      }))
    }


  } catch (e) {
    alert('Error searching players')
  }
}