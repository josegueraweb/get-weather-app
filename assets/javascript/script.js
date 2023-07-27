  var form = document.getElementById('city-search-form');
  var dayMainConditionEl = $('.day-main-condition');
  var apiKey = "dc1a4138ca5b423d48372a11c0f7cf5c";

  function getApi(event) {
    event.preventDefault();

    var citySearchInput = document.getElementById('city-search-input').value.toLowerCase().trim();

    var cityNameToGeocode = "http://api.openweathermap.org/geo/1.0/direct?q=" + citySearchInput + "&appid=" + apiKey;

    localStorage.setItem("citySearchInput", JSON.stringify(citySearchInput));

    var cityRetrieve = JSON.parse(localStorage.getItem("citySearchInput"));

    document.getElementById('btn-archive').value = cityRetrieve;


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


            var currentCondition = weatherData.current.weather[0].description; 
            var currentTemp = weatherData.current.temp;
            var currentWindSpeed = weatherData.current.wind_speed;
            var currentHumidity = weatherData.current.humidity;

            $('.current-condition').text(currentCondition); 
            $('.current-temp').text("Temperature: " + currentTemp + " °F");
            $('.current-wind-speed').text("Wind Speed: " + currentWindSpeed + " mph");
            $('.current-humidity').text("Humidity: " + currentHumidity + "   (lbs/ft3)");


            var cityWeatherFiveDay = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";

            fetch(cityWeatherFiveDay)
              .then(function (response) {
                return response.json();
              })
              .then(function (weatherDataFiveDay) {
                console.log(weatherDataFiveDay);

                var day01Condition = weatherDataFiveDay.list[0].weather[0].description; 
                var day01Icon = weatherDataFiveDay.list[0].weather[0].icon; 
                var day01Temp = weatherDataFiveDay.list[0].main.temp;
                var day01WindSpeed = weatherDataFiveDay.list[0].wind.speed;
                var day01Humidity = weatherDataFiveDay.list[0].main.humidity;

                $('.day01-condition').text(day01Condition); 
                console.log(day01Icon);
                $('.day01-temp').text("Temperature: " + day01Temp + " °F");
                $('.day01-wind-speed').text("Wind Speed: " + day01WindSpeed + " mph");
                $('.day01-humidity').text("Humidity: " + day01Humidity + "   (lbs/ft3)");

                var day02Condition = weatherDataFiveDay.list[1].weather[0].description; 
                var day02Icon = weatherDataFiveDay.list[1].weather[0].icon; 
                var day02Temp = weatherDataFiveDay.list[1].main.temp;
                var day02WindSpeed = weatherDataFiveDay.list[1].wind.speed;
                var day02Humidity = weatherDataFiveDay.list[1].main.humidity;

                $('.day02-condition').text(day02Condition); 
                console.log(day02Icon);
                $('.day02-temp').text("Temperature: " + day02Temp + " °F");
                $('.day02-wind-speed').text("Wind Speed: " + day02WindSpeed + " mph");
                $('.day02-humidity').text("Humidity: " + day02Humidity + "   (lbs/ft3)");

                var day03Condition = weatherDataFiveDay.list[2].weather[0].description; 
                var day03Icon = weatherDataFiveDay.list[2].weather[0].icon; 
                var day03Temp = weatherDataFiveDay.list[2].main.temp;
                var day03WindSpeed = weatherDataFiveDay.list[2].wind.speed;
                var day03Humidity = weatherDataFiveDay.list[2].main.humidity;

                $('.day03-condition').text(day03Condition); 
                console.log(day03Icon);
                $('.day03-temp').text("Temperature: " + day03Temp + " °F");
                $('.day03-wind-speed').text("Wind Speed: " + day03WindSpeed + " mph");
                $('.day03-humidity').text("Humidity: " + day03Humidity + "   (lbs/ft3)");

                var day04Condition = weatherDataFiveDay.list[3].weather[0].description; 
                var day04Icon = weatherDataFiveDay.list[3].weather[0].icon; 
                var day04Temp = weatherDataFiveDay.list[3].main.temp;
                var day04WindSpeed = weatherDataFiveDay.list[3].wind.speed;
                var day04Humidity = weatherDataFiveDay.list[3].main.humidity;

                $('.day04-condition').text(day04Condition); 
                console.log(day04Icon);
                $('.day04-temp').text("Temperature: " + day04Temp + " °F");
                $('.day04-wind-speed').text("Wind Speed: " + day04WindSpeed + " mph");
                $('.day04-humidity').text("Humidity: " + day04Humidity + "   (lbs/ft3)");

                var day05Condition = weatherDataFiveDay.list[4].weather[0].description; 
                var day05Icon = weatherDataFiveDay.list[4].weather[0].icon; 
                var day05Temp = weatherDataFiveDay.list[4].main.temp;
                var day05WindSpeed = weatherDataFiveDay.list[4].wind.speed;
                var day05Humidity = weatherDataFiveDay.list[4].main.humidity;

                $('.day05-condition').text(day05Condition); 
                console.log(day05Icon);
                $('.day05-temp').text("Temperature: " + day05Temp + " °F");
                $('.day05-wind-speed').text("Wind Speed: " + day05WindSpeed + " mph");
                $('.day05-humidity').text("Humidity: " + day05Humidity + "   (lbs/ft3)");

              });

          });

      });

  }

  form.addEventListener('submit', getApi);