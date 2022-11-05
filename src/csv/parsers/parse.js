// import csv from 'csv-parser';
// import fs from 'fs';
// import path, { dirname } from 'path';
// import { fileURLToPath } from 'url';
//
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
//
// const results = [];
//
// export const parse = async (readStream, filename) => {
//   const filepath = path.join(__dirname, '..', '..', '..', 'resources', `${filename}.csv`);
//   return new Promise((resolve, reject) => {
//     readStream(filepath)
//       .pipe(csv())
//       .on('data', (data) => {
//         results.push(data);
//       })
//       .on('end', () => {
//         resolve(results);
//       })
//       .on('error', error => {
//         reject(error);
//       });
//   });
// };