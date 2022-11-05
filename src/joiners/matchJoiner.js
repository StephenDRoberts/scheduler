
export const joinMatchDetails = ({ matches, competitionMap, priorityMap }) => {
  const hydratedMatches = matches.map(match => {
    const { competition } = match
    const { country, priority } = competitionMap[competition]
    const priorityHours = priorityMap[priority]

    return { ...match, country, priority, priorityHours }
  })

  // console.log(hydratedMatches)
  return hydratedMatches
}