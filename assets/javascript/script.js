  var form = document.getElementById('city-search-form');
  var dayMainConditionEl = $('.day-main-condition');
  var apiKey = "dc1a4138ca5b423d48372a11c0f7cf5c";

  function getApi(event) {
    event.preventDefault();

    var citySearchInput = document.getElementById('city-search-input').value.toLowerCase().trim();

    var cityNameToGeocode = "http://api.openweathermap.org/geo/1.0/direct?q=" + citySearchInput + "&appid=" + apiKey;

    fetch(cityNameToGeocode)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        var latitude = data[0].lat;
        var longitude = data[0].lon;

        var cityWeatherCurrent = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";

        fetch(cityWeatherCurrent)
          .then(function (response) {
            return response.json();
          })
          .then(function (weatherData) {
            console.log(weatherData);

            var currentTemp = weatherData.current.temp;
            var currentWindSpeed = weatherData.current.wind_speed;
            var currentHumidity = weatherData.current.humidity;

            $('.current-temp').text("Temperature: " + currentTemp + " °F");
            $('.current-wind-speed').text("Wind Speed: " + currentWindSpeed + " mph");
            $('.current-humidity').text("Humidity: " + currentHumidity + "   (lbs/ft3)");

          });






      });







  };

  form.addEventListener('submit', getApi);