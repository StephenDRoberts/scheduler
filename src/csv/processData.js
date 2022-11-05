import { parseMatches } from './parsers/parseMatches.js';
import { parsePriorities } from './parsers/parsePriorities.js';
import { parseCompetitions } from './parsers/parseCompetitions.js';
import { parsePreferences } from './parsers/parsePreferences.js';
import { parseSchedule } from './parsers/parseSchedule.js';
// import { parse } from './csvParser/parse.js';
// import fs from 'fs';

export const processCSVs = async () => {



  // const matchesReadStream = (filepath) => new fs.createReadStream(filepath)
  // const prioritiesReadStream = (filepath) => new fs.createReadStream(filepath)


  const matches = await parseMatches('matches')
  const priorities = await parsePriorities('priorities')
  const competitions = await parseCompetitions('competitions')
  const preferences = await parsePreferences('preferences')
  const schedule = await parseSchedule('schedule')

}