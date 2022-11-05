import { handleMatches } from './handlers/matchesHandler.js';
import { handlePriorities } from './handlers/prioritiesHandler.js';
import { handleCompetitions } from './handlers/competitionsHandler.js';
import { handleSchedule } from './handlers/scheduleHandler.js';
import { handlePreferences } from './handlers/preferencesHandler.js';
import { joinMatchDetails } from './joiners/matchJoiner.js';
import { joinScheduleDetails } from './joiners/scheduleJoiner.js';
import { sortByDateAsc } from './utils/utils.js';

export const scheduler = async () => {
  const matches = await handleMatches()
  const priorityMap = await handlePriorities()
  const competitionMap = await handleCompetitions()
  const schedule = await handleSchedule()
  const preferenceMap = await handlePreferences()

  const matchesWithPriority = joinMatchDetails({matches, competitionMap, priorityMap})
  const teamScheduleWithPreferences = joinScheduleDetails({ schedule, preferenceMap })

  const sortedMatches = sortByDateAsc(matchesWithPriority, 'timestamp')
  const sortedSchedules = sortByDateAsc(teamScheduleWithPreferences, 'shiftStart')

  console.log(sortedSchedules)
}