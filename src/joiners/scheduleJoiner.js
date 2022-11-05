
export const joinScheduleDetails = ({ schedule, preferenceMap }) => {
  const hydratedSchedule = schedule.map(shift => {
      const preferenceCompetitions = preferenceMap[shift.squad]
      return { ...schedule, preferences: preferenceCompetitions }
    })

  return hydratedSchedule
}