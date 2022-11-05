import { parsePriorities } from '../csv/parsers/parsePriorities.js';

export const handlePriorities = async () => {
  const rawPriorities = await parsePriorities()

  const priorityMap = {}

  rawPriorities.map(priority => {
    const { ['Priority Class']: priorityClass, ['Hours']: hours } = priority
    priorityMap[priorityClass] = parseInt(hours)
  })


  return priorityMap
}