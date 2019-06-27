#!/usr/bin/env node
const logSymbols = require('log-symbols');
const axios = require('axios');
const chalk = require('chalk');
const readline = require('readline');
const log= console.log;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
log(chalk.magenta.bold("Hi nice to see you!"));
rl.question(chalk.green('write city name\n'), (answer1) => {
    rl.question(chalk.green('write country code for example: USA-us Poland-pl\n'), (answer2) => {
            getForecast(answer1,answer2);
            rl.close();
    });
});
function getForecast(id1,id2){
    axios.get('https://api.openweathermap.org/data/2.5/weather?q='+id1+','+id2+'&units=metric&APPID=fb66808af5b0ec32949f238ab49f1711')
  .then(response => {
    log(chalk.yellow(logSymbols.success,'weather in '+response.data.name +':'))
    log(chalk.magenta(logSymbols.success,'temperature: '+response.data.main.temp+'*C '+response.data.weather[0].description));
  })
  .catch(error => {
    console.log(chalk.red(logSymbols.error,'invalid values'));
  });
  }
  // The whole response has been received. Print out the result.
