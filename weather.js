$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
   
 var markup = "<B><U> CURRENT WEATHER CONDITIONS </B></U> " + "<BR>" + "<BR> <B>* Day 1: </B>"  + data.currently.summary + "<BR>" + 
 "<BR> &emsp; &emsp; &emsp; <U> Chance of Rain </U>" + "&emsp; &emsp; <U> Current Temperature</U>" + "&emsp; &emsp; <U>Humidity</U>" + "&emsp; &emsp; <U>Wind Speed </U>" +
  "<BR> &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;" + data.currently.precipProbability*100 + "%" +
  " &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;"  + data.currently.temperature + " F" +  " &emsp; &emsp; &emsp; &emsp; &emsp; " + data.currently.humidity*100 + "%" + 
 " &emsp; &emsp; &emsp; " + data.currently.windSpeed + " mph" +

 "<BR>" + "<BR>" + "<BR> <B><U> 3 DAY WEATHER FORECAST </B></U>" + "<BR>" + 
 "<BR><B> * Day 2: </B>" + data.daily.data[1].summary + "<BR>" +
 "<BR> &emsp; &emsp; &emsp; <U>Chance of Rain </U>" + "&emsp; &emsp; <U>Min Temperature</U>" + "&emsp; &emsp; <U>Max Temperature </U>" + "&emsp; &emsp; <U>Humidity</U>" + "&emsp; &emsp; <U>Wind Speed</U>" +
 "<BR> &emsp; &emsp; &emsp; &emsp; &emsp;  &emsp; " + data.daily.data[1].precipProbability*100 + "%" +
 " &emsp; &emsp; &emsp; &emsp; &emsp; " + data.daily.data[1].temperatureMin + " F" + " &emsp; &emsp; &emsp; &emsp;  &emsp;  " + data.daily.data[1].temperatureMax + " F" +
 " &emsp; &emsp; &emsp; &emsp;  &emsp; " + data.daily.data[1].humidity*100 + "%" + " &emsp; &emsp; &emsp; &emsp;" + data.daily.data[1].windSpeed + " mph" +
 
 "<BR>" + "<BR>"+" <BR> <B>* Day 3: </B>" + data.daily.data[2].summary + "<BR>" +
 "<BR> &emsp; &emsp; &emsp; <U>Chance of Rain </U>" + "&emsp; &emsp; <U>Min Temperature</U>" + "&emsp; &emsp; <U>Max Temperature </U>" + "&emsp; &emsp; <U>Humidity</U>" + "&emsp; &emsp; <U>Wind Speed</U>" +
 "<BR> &emsp; &emsp;  &emsp;  &emsp;  &emsp; " + data.daily.data[2].precipProbability*100 + "%" +
 " &emsp; &emsp; &emsp;  &emsp;  &emsp; " + data.daily.data[2].temperatureMin + " F" +  " &emsp; &emsp; &emsp;  &emsp;  &emsp; &emsp;  " + data.daily.data[2].temperatureMax + " F" + 
 " &emsp; &emsp; &emsp;  &emsp;  &emsp; " + data.daily.data[2].humidity*100 + "%" + "&emsp; &emsp; &emsp;  &emsp; " + data.daily.data[2].windSpeed + " mph" +

 "<BR>"+"<BR>"+"<BR> <B>* Day 4: </B>" + data.daily.data[3].summary + "<BR>" + 
  "<BR> &emsp; &emsp; &emsp; <U>Chance of Rain </U>" + "&emsp; &emsp; <U>Min Temperature</U>" + "&emsp; &emsp; <U>Max Temperature </U>" + "&emsp; &emsp; <U>Humidity</U>" + "&emsp; &emsp; <U>Wind Speed</U>" +
 " <BR> &emsp; &emsp; &emsp;  &emsp;  &emsp;  &emsp; " + data.daily.data[3].precipProbability*100 + "%" +
 " &emsp; &emsp;  &emsp;  &emsp;  &emsp; " + data.daily.data[3].temperatureMin + " F" +  " &emsp; &emsp;  &emsp;  &emsp;  &emsp; " + data.daily.data[3].temperatureMax + " F" +
 " &emsp; &emsp;  &emsp;  &emsp;  &emsp;  &emsp; " + data.daily.data[3].humidity*100 + "%" + " &emsp; &emsp; &emsp;  &emsp;  " + data.daily.data[3].windSpeed + " mph";

    // End of your code

  $('.weather-report').html(markup);
  }

  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});