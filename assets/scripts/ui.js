'use strict'

const getWeatherSuccess = function (responseData) {
  // console.log('responseData', responseData)
  // console.log('responseData.name', responseData.name)
  // console.log('responseData.sys.country', responseData.sys.country)
  // console.log('responseData.Location', responseData.name + ',' + responseData.sys.country)
  $('#responseLocation').html(responseData.name + ',' + responseData.sys.country)
  $('#responseTemp').html(responseData.main.temp)
  $('#responseHumi').html(responseData.main.humidity + '%')
  $('#responseCon').html(responseData.weather[0].main)
  $('#getMyWeather').trigger('reset')
}

const getWeatherFailure = function (responseData) {
  $('#failureMessage').modal()
  $('#getMyWeather').trigger('reset')
}

module.exports = {
  getWeatherSuccess,
  getWeatherFailure
}
