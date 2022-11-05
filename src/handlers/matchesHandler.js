import { parseMatches } from '../csv/parsers/parseMatches.js';

const AVERAGE_GAME_TIME_IN_MILLIS = 110 * 60 * 1000

export const handleMatches = async () => {
  const rawMatches = await parseMatches('matches')

  const matchesWithTimestamp = rawMatches.map(match => {
    const { ['ID']: matchId, ['Match Date']: matchDate, ['Kick-off Time']: kickOffTime, ['Competition']: competition } = match

    // TODO move to joiner
    const [day, month, year] = matchDate.split("/")
    const [hours, minutes] = kickOffTime.split(":")

    const kickOffTimestamp = new Date(Date.UTC(year, month, day, hours, minutes))
    const earliestProcessingTime = new Date(kickOffTimestamp.getTime() + AVERAGE_GAME_TIME_IN_MILLIS)

    // TODO move to parser?
    const formattedCompetition = Buffer.from(competition, 'latin1').toString();

    return { matchId: parseInt(matchId), matchDate, kickOffTime, competition: formattedCompetition, timestamp: kickOffTimestamp, earliestProcessingTime}
  })

  return matchesWithTimestamp
}