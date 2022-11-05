import { parsePreferences } from '../csv/parsers/parsePreferences.js';

export const handlePreferences = async () => {
  const rawPreferences = await parsePreferences()

  const preferencesMap = {}

  rawPreferences.map(preference => {
    const { ['Competition']: competition, ['Squad']: squad } = preference

    const squadPreferences  = preferencesMap[squad] || []
    squadPreferences.push(competition)
    preferencesMap[squad] = squadPreferences
  })

  return preferencesMap
}