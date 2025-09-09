export const searchInput = async ({ search, category}) => {
  console.log(search, category)
  if (search === '') return null

  const modifiedCategory = category.toLowerCase()
  console.log(modifiedCategory[0])

  

  try {
    const response = await fetch(`https://www.thesportsdb.com/api/v1/json/123/search${modifiedCategory}.php?${modifiedCategory[0]}=${search}`)
    const json = await response.json()
    const playersTeamsEvents = json.player || []
    if (modifiedCategory === 'teams') {
      

      return playersTeamsEvents?.map(playerTeamEvent => ({
        id: playerTeamEvent.idTeam,
        league: playerTeamEvent.strLeague,
        league2: playerTeamEvent.strLeague2,
        league3: playerTeamEvent.strLeague3,
        league4: playerTeamEvent.strLeague4,
        league5: playerTeamEvent.strLeague5,
        stadium: playerTeamEvent.strStadium,
        nickname: playerTeamEvent.strKeywords,
        location: playerTeamEvent.strLocation,
        descriptionES: playerTeamEvent.strDescriptionES,
        img: playerTeamEvent.strBadge,
        image: movie.Poster
      }))
    }

    if (modifiedCategory === 'events') {
      
      return playersTeamsEvents?.map(playerTeamEvent => ({
        id: playerTeamEvent.idEvent,
        name: playerTeamEvent.strEvent,
        league: playerTeamEvent.strLeague,
        season: playerTeamEvent.strSeason,
        homeTeam: playerTeamEvent.strHomeTeam,
        awayTeam: playerTeamEvent.strAwayTeam,
        homeScore: playerTeamEvent.intHomeScore,
        awayScore: playerTeamEvent.intAwayScore,
        date: playerTeamEvent.dateEvent,
        imgHomeTeam: playerTeamEvent.strHomeTeamBadge,
        imgAwayTeam: playerTeamEvent.strAwayTeamBadge,
        location: playerTeamEvent.strVenue
      }))
    }

    if (modifiedCategory === 'players') {
      
      return playersTeamsEvents?.map(playerTeamEvent => ({
        id: playerTeamEvent.idPlayer,
        name: playerTeamEvent.strPlayer,
        team: playerTeamEvent.strTeam,
        position: playerTeamEvent.strPosition,
        nacionality: playerTeamEvent.strNationality,
        dateBorn: playerTeamEvent.dateBorn,
        status: playerTeamEvent.strStatus,
        gender: playerTeamEvent.strGender,
        date: playerTeamEvent.dateEvent,
        img: playerTeamEvent.strThumb,
      }))
    }


  } catch (e) {
    alert('Error searching players')
  }
}