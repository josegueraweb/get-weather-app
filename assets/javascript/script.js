// var cityNameId = document.getElementById('city-name');
// var cityTempId = document.getElementById('city-temp');

var form = document.getElementById('city-search-form');
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

      for (var i = 0; i < data.length; i++) {
        var latitude = data[i].lat;
        var longitude = data[i].lon;
      };

      var cityWeatherCurrent = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";

      console.log(cityWeatherCurrent);

    });
  }

//   fetch(cityWeatherCurrent)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });

// };

form.addEventListener('submit', getApi);