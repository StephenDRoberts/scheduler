import readlineSync from 'readline-sync';
import { processCSVs } from './csv/processData.js';
import { scheduler } from './scheduler.js';

let running =  true

const loadNewDataMessage = 'Load new data'
const runSchedulerMessage = 'Run scheduler job'
const taskOptions = [loadNewDataMessage, runSchedulerMessage]

const taskIndexQuery = () => readlineSync.keyInSelect(taskOptions, "Welcome to the scheduler, please select an option:")

const processTaskOptions = async (taskIndex) => {
  switch(taskOptions[taskIndex]) {
    case loadNewDataMessage:
      console.log("Loading new data")
      process.exit()
      break;
    case runSchedulerMessage:
      console.log('Running scheduler')
      await scheduler()
      break;
    default:
      console.log("Byee!")
      // running = false
      process.exit()
  }
}



// while(running) {
  let taskIndex = taskIndexQuery()
  console.log('you selected', taskOptions[taskIndex])
  processTaskOptions(taskIndex)
// }










