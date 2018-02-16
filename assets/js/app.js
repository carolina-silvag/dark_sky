var data1;
var nDay = [];
var clima = [];
var iconMap = {
  'clear-day': 'wi-day-sunny',
  'clear-night': 'wi-night-clear',
  'rain': 'wi-rain',
  'snow': 'wi-snow',
  'sleet': 'wi-sleet',
  'wind': 'wi-strong-wind',
  'fog': 'wi-fog',
  'cloudy': 'wi-cloudy',
  'partly-cloudy-day': 'wi-day-cloudy',
  'partly-cloudy-night': 'wi-night-alt-cloudy',
  'hail': 'wi-hail',
  'thunderstorm':'wi-thunderstorm',
  'tornado': 'wi-tornado'
};

navigator.geolocation.getCurrentPosition(function(position){
  lat = position.coords.latitude;
  log = position.coords.longitude;
  fetch('https://api.darksky.net/forecast/bdc0f4652093c10526666c059b217fb8/' + lat + ','+ log + '?units=auto').then(function(response) {
    return response.json();
  })


  .then(function(data) {
    console.log(data);

    for (var i = 1; i < data.daily.data.length; i++) {
      let numberDay = data.daily.data[i].time;
      let d = new Date(numberDay *1000).getDay();
      nDay.push(d);

      let nameClima = data.daily.data[i].icon;
      clima.push(nameClima);

    }
    data1 = data;
    init();
  });
});

function init() {
  $('#weather').empty();
  $('#btn').empty();

  let dataWeather = `<div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">            
            <div class='text-center'><i class='iconLarge wi ${iconMap[data1.currently.icon]}'></i></div>
            <h2 id="" class='text-center'>${parseInt(data1.currently.temperature)}°</h2>
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row">Viento</th>
                  <td class='text-right'>${data1.currently.windSpeed} m/s</td>
                </tr>
                <tr>
                  <th scope="row">Humedad</th>
                  <td class='text-right'>${data1.currently.humidity} %</td>
                </tr>                   
                <tr>  
                  <th scope="row">UV</th>
                  <td class='text-right'>${data1.currently.uvIndex}</td>
                </tr>
                <tr>  
                  <th scope="row">Presión</th>
                  <td class='text-right'>${data1.currently.pressure} hPa</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>`;

  let btn = `<button type="button" class="btn btn-info" id="btnDay">PREDICCIÓN DE LA SEMANA</button>`;

  $('#weather').append(dataWeather);
  $('#btn').append(btn);
  $('#btnDay').click(week);
}

function week() {
  $('#weather').empty();
  $('#btn').empty();

  let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let daily = `<div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">            
            <img src="" alt="">
            <table class="table">
              <tbody>
                <tr>
                  <th scope="row"><i class='wi ${iconMap[clima[0]]}'></i> ${day[nDay[0]]}</th>
                  <td class='text-right'>${parseInt(data1.daily.data[1].temperatureMin)}° - ${parseInt(data1.daily.data[1].temperatureMax)}°</td>
                </tr>
                <tr>
                  <th scope="row"><i class='wi ${iconMap[clima[1]]}'></i> ${day[nDay[1]]}</th>
                  <td class='text-right'>${parseInt(data1.daily.data[2].temperatureMin)}° - ${parseInt(data1.daily.data[2].temperatureMax)}°</td>
                </tr>                   
                <tr>  
                  <th scope="row"><i class='wi ${iconMap[clima[2]]}'></i> ${day[nDay[2]]}</th>
                  <td class='text-right'>${parseInt(data1.daily.data[3].temperatureMin)}° - ${parseInt(data1.daily.data[3].temperatureMax)}°</td>
                </tr>
                <tr>  
                  <th scope="row"><i class='wi ${iconMap[clima[3]]}'></i> ${day[nDay[3]]}</th>
                  <td class='text-right'>${parseInt(data1.daily.data[4].temperatureMin)}° - ${parseInt(data1.daily.data[4].temperatureMax)}°</td>
                </tr>
                <tr>  
                  <th scope="row"><i class='wi ${iconMap[clima[4]]}'></i> ${day[nDay[4]]}</th>
                  <td class='text-right'>${parseInt(data1.daily.data[5].temperatureMin)}° - ${parseInt(data1.daily.data[5].temperatureMax)}°</td>
                </tr>
                <tr>  
                  <th scope="row"><i class='wi ${iconMap[clima[5]]}'></i> ${day[nDay[5]]}</th>
                  <td class='text-right'>${parseInt(data1.daily.data[6].temperatureMin)}° - ${parseInt(data1.daily.data[6].temperatureMax)}°</td>
                </tr>
                <tr>  
                  <th scope="row"><i class='wi ${iconMap[clima[6]]}'></i> ${day[nDay[6]]}</th>
                  <td class='text-right'>${parseInt(data1.daily.data[7].temperatureMin)}° - ${parseInt(data1.daily.data[7].temperatureMax)}°</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>`;
  let btnBack = `<button type="button" class="btn btn-info" id="btnBack">VOLVER AL PRINCIPIO</button>`;

  $('#weather').append(daily);
  $('#btn').append(btnBack);
  $('#btnBack').click(init);
}

function icon() {

}