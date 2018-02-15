let weather = $('#weather');

fetch('https://api.darksky.net/forecast/bdc0f4652093c10526666c059b217fb8/37.8267,-122.4233').then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
})