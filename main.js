const chalk = require('chalk')
const moment = require('moment')

var today = moment().format('dddd')
var midnight = moment().startOf('day')
var now = moment().format('MMMM Do YYYY, h:mm:ss a')
var numberofDay = moment().format('DDDo')
var secondsNow = moment()

//Print THIS
//It is DAYOFTHEWEEK, DATE, TIME. (all colorized)
console.log('It is ' + chalk.rgb(0, 178, 255)(today) + ', ' + chalk.rgb(0, 178, 255)(now))
//It is the #th(colorized) day of the year.
console.log('It is the ' + chalk.rgb(255, 0, 222)(numberofDay) + ' day of the year.')
//It is #(colorized) seconds into the day.
console.log('It is ' + chalk.rgb(255, 255, 255)(secondsNow.diff(midnight, 'seconds')) + ' into the day.')
//It is(colorized) during/not Daylight Savings Time.
if (moment().isDST()) {
  console.log('It ' + chalk.rgb(171, 0, 255)('is ') + 'Daylight Savings Time.')
} else {
  console.log('It ' + chalk.rgb(171, 0, 255)('is not ') + 'Daylight Savings Time.')
}
//It is/is not(colorized) a leap year.
if (moment().isLeapYear()) {
  console.log('It ' + chalk.rgb(255, 0, 0)('is ') + 'a leap Year.')
} else {
  console.log('It ' + chalk.rgb(255, 0, 0)('is not ') + 'a leap Year.')
}
