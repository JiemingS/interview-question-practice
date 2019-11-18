'use strict'

const api = require('./api')
const ui = require('./ui')

const onGetWeather = function (event) {
  event.preventDefault()
  const locationInforOne = $('#location1').val()
  const locationInforTwo = $('#location2').val()
  api.getWeather(locationInforOne, locationInforTwo)
    .then(ui.getWeatherSuccess)
    .catch(ui.getWeatherFailure)
}

module.exports = {
  onGetWeather
}
