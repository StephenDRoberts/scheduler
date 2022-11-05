import { parseCompetitions } from '../csv/parsers/parseCompetitions.js';

export const handleCompetitions = async () => {
  const rawCompetitions = await parseCompetitions()
  const competitionMap = {}

  rawCompetitions.map(comp => {
    const { ['Country']: country, ['Competition']: competition, ['Priority']: priority } = comp

    competitionMap[competition] = { country, priority }
  })

  return competitionMap
}