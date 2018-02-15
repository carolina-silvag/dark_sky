let weather = $('#weather');

navigator.geolocation.getCurrentPosition(function(position) {
  lat = position.coords.latitude;
  log = position.coords.longitude;
  console.log(lat, log);
  fetch('https://api.darksky.net/forecast/bdc0f4652093c10526666c059b217fb8/' + lat + ','+ log).then(function(response) {
    return response.json();
  })


  .then(function(data) {
    console.log(data);

    let dataWeather = `<div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">            
              <img src="" alt="">
              <h2 id="" class='text-center'>${parseInt(data.currently.temperature - 32)}</h2>
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">Viento</th>
                    <td class='text-right'>${data.currently.windSpeed} m/s</td>
                  </tr>
                  <tr>
                    <th scope="row">Humedad</th>
                    <td class='text-right'>${data.currently.humidity} %</td>
                  </tr>                   
                  <tr>  
                    <th scope="row">UV</th>
                    <td class='text-right'>${data.currently.uvIndex}</td>
                  </tr>
                  <tr>  
                    <th scope="row">Presión</th>
                    <td class='text-right'>${data.currently.pressure} hPa</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>`

    $('#weather').append(dataWeather);
    let day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let nDay= [];
    for (var i = 1; i < data.daily.data.length; i++) {
      let numberDay = data.daily.data[i].time;
      let d = new Date(numberDay *1000).getDay();
      nDay.push(d);
    }

    $('#btnDay').click(function(){
      $('#weather').empty();

      let daily = `<div class="row">
              <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">            
                <img src="" alt="">
                <table class="table">
                  <tbody>
                    <tr>
                      <th scope="row">${day[nDay[0]]}</th>
                      <td class='text-right'>${parseInt(data.daily.data[1].temperatureMin - 32)}° - ${parseInt(data.daily.data[1].temperatureMax - 32)}°</td>
                    </tr>
                    <tr>
                      <th scope="row">${day[nDay[1]]}</th>
                      <td class='text-right'>${parseInt(data.daily.data[2].temperatureMin - 32)}° - ${parseInt(data.daily.data[2].temperatureMax - 32)}°</td>
                    </tr>                   
                    <tr>  
                      <th scope="row">${day[nDay[2]]}</th>
                      <td class='text-right'>${parseInt(data.daily.data[3].temperatureMin - 32)}° - ${parseInt(data.daily.data[3].temperatureMax - 32)}°</td>
                    </tr>
                    <tr>  
                      <th scope="row">${day[nDay[3]]}</th>
                      <td class='text-right'>${parseInt(data.daily.data[4].temperatureMin - 32)}° - ${parseInt(data.daily.data[4].temperatureMax - 32)}°</td>
                    </tr>
                    <tr>  
                      <th scope="row">${day[nDay[4]]}</th>
                      <td class='text-right'>${parseInt(data.daily.data[5].temperatureMin - 32)}° - ${parseInt(data.daily.data[5].temperatureMax - 32)}°</td>
                    </tr>
                    <tr>  
                      <th scope="row">${day[nDay[5]]}</th>
                      <td class='text-right'>${parseInt(data.daily.data[6].temperatureMin - 32)}° - ${parseInt(data.daily.data[6].temperatureMax - 32)}°</td>
                    </tr>
                    <tr>  
                      <th scope="row">${day[nDay[6]]}</th>
                      <td class='text-right'>${parseInt(data.daily.data[7].temperatureMin - 32)}° - ${parseInt(data.daily.data[7].temperatureMax - 32)}°</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>`
        $('#weather').append(daily);
    })


  })



});
