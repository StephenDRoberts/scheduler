import csv from 'csv-parser';
import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const results = [];

export const parseCompetitions = async () => {
  const filepath = path.join(__dirname, '..', '..', '..', 'resources', `competitions.csv`);

  return new Promise((resolve, reject) => {
    fs.createReadStream(filepath)
      .pipe(csv())
      .on('data', (data) => {
        results.push(data);
      })
      .on('end', () => {
        // TODO convert to latin1 here instead of in handler
        resolve(results);
      })
      .on('error', error => {
        reject(error);
      });
  });
};