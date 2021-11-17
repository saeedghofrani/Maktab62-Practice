$(document).ready(function () {
  //api for country info//
  $.ajax({
    type: "GET",
    url: "https://restcountries.com/v3.1/all",
    success: function (res) {
      //on success we add countries to option of input//
      for (let i = 0; i < res.length; i++) {
        $("#countriesSelect").append(`
        <option value="${res[i].cca3}">${res[i].name.common}</option>
        `);
      }
      //on change of input//
      $("#countriesSelect").change(function (e) {
        e.preventDefault();
        //find uniqe part of country //
        // get name of country//
        let country = res.find((element) => {
          return element.cca3 === $(this).val();
        });
        //call function//
        countryInfo(country);
        weatherReport(country.capital[0]);
        mapInfo(country);
      });
    },
    error: alert('404 page not found'),
  });
});


// function for get weather info//
function weatherReport(cityName) {
  $.ajax({
    type: "GET",
    url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName.toLowerCase()}&appid=7530ca392fa579174baa2caf4295b350`,
    success: function (response) {
      console.log(response);
      $('#discription').html(`${response.weather[0].description}`)
      C = Math.floor((response.main.temp)-273.15);
      $("#weatherImage").attr("src", `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`);
      $("#windspeed").html(`${response.wind.speed} MS`);
      $("#temperature").html(`${C} C`);
      $("#humidity").html(`${response.main.humidity}%`);
      $("#visibility").html(`${response.visibility}m`);

    },
  });
}



function countryInfo(country) {
  console.log(country);
  $('#nativeHeaderName').html(` ${country.name.official}`);
  $("#cName").html(`${country.name.common}`);
  $("#capital").html(` ${country.capital[0]}`);
  $("#region").html(` ${country.region}`);
  $("#population").html(
    ` ${country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
  );
  $("#languages").html(
    ` ${country.languages[Object.keys(country.languages)[0]]}`
  );
  $("#time-zone").html(
    `${country.timezones[Object.keys(country.timezones)[0]]}`
  );
  $("#callingCode").html(` ${country.idd.root}${country.idd.suffixes[0]}`);

  $("#countryImage").attr("src", `${country.flags.svg}`);
};


function mapInfo(country) {
  $(".mapParent").html("<div class=`h-100` id='map'></div>");
  let myMap = L.map("map").setView([country.capitalInfo.latlng[0], country.capitalInfo.latlng[1]], 9);

  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
    {
      maxZoom: 18,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(myMap);
  L.marker([country.capitalInfo.latlng[0], country.capitalInfo.latlng[1]]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();
}