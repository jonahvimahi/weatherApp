const key = config.MY_API_KEY;
const baseURL = "http://api.weatherapi.com/v1";

document.getElementById("enter").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("info").innerHTML = "";
  document.getElementById("more-info").innerHTML = "";
  let q = document.getElementById("search").value;
  let current = "/current.json";

  let options = {
    method: "GET",
    url: baseURL + current,
    params: {
      key,
      q,
    },
  };
  axios.request(options).then((res) => {
    let weather = {
      time: res.data.location.localtime,
      name: res.data.location.name + "," + " " + res.data.location.region,
      country: res.data.location.country,

      temp: res.data.current.temp_f + "°F",
      condition: res.data.current.condition.text,
    };

    for (item in weather) {
      let list = document.createElement("li");
      list.textContent = weather[item];
      document.getElementById("info").appendChild(list);
    }
    let image = document.createElement("img");
    image.src = res.data.current.condition.icon;
    document.getElementById("info").appendChild(image);
  });

});
document.getElementById("forecast").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("more-info").innerHTML = "";


  let q = document.getElementById("search").value;
  let forecast = "/forecast.json";
  let days = '1';

  let options = {
    method: "GET",
    url: baseURL + forecast,
    params: {
      key,
      q,
      days,
    },
  };
  axios.request(options).then((res) => {
      // console.log(res.data)
    let allInfo = {
      date: "Date: " + res.data.forecast.forecastday[0].date,
      maxtemp: "Max temp: " + res.data.forecast.forecastday[0].day.maxtemp_f + "°F",
      mintemp: "Min temp: " + res.data.forecast.forecastday[0].day.mintemp_f + "°F",
      sunrise: "Sunrise: " + res.data.forecast.forecastday[0].astro.sunrise,
      sunset: "Sunset: " + res.data.forecast.forecastday[0].astro.sunset,
    };
    for (item in allInfo) {
      let list = document.createElement("li");
      list.textContent = allInfo[item];
      document.getElementById("more-info").appendChild(list);
    }
  });
});
