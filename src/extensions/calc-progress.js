const isDate = require('lodash.isdate')

module.exports = toolbox => {
  calcProgress = () => {
    // work out year progress - code from: https://github.com/nicomf1982/year-progress-bar
    let date
    if (date) {
      if (!isDate(date)) {
        throw new Error('incorrent date')
      }
    } else {
      date = new Date()
    }

    const initialDate = new Date(date.getFullYear(), 0, 1)
    const isLeapYear = year => {
      return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)
    }
    const percent = Math.floor(
      (((date - initialDate) / (1000 * 60 * 60 * 24)) * 100) /
        (isLeapYear(date.getFullYear()) ? 366 : 365)
    )
    let yearBar = ''

    for (let i = 5; i <= 100; i += 5) {
      yearBar = i < percent ? yearBar + '▓' : yearBar + '░'
    }

    const pg = `the year is ${percent}% done ${yearBar} (╯°□°）╯︵ ┻━┻) 😱`
    return pg
  }

  toolbox.progress = { calcProgress }
}
