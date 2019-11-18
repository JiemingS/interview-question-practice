'use strict'

const getWeather = function (cityName, cityCode) {
  return $.ajax({
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + ',' + cityCode + '&appid=' + 'b77b558967d3e098ecf5799be421004f'
  })
}

module.exports = {
  getWeather
}
