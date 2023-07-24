var fetchButton = document.getElementById('fetch-button');

function getApi() {

  var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.575764&lon=-121.478851&appid=dc1a4138ca5b423d48372a11c0f7cf5c';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      
    });

  console.log("fetching URL");
  console.log(requestUrl);
}

fetchButton.addEventListener('click', getApi);

