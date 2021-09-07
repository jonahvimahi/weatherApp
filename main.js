const key = config.MY_API_KEY;
const baseURL = "http://api.weatherapi.com/v1";

document.getElementById("enter").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("ul").innerHTML = "";
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
    console.log(res.data);
    let weather = {
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

document.getElementById("forecast").addEventListener("click", () => {
  document.querySelector("more-info").innerHTML = "";

  let q = document.querySelector("search").value;
  let forecast = "/forecast.json";

  let options = {
    method: "GET",
    url: baseURL + forecast,
    params: {
      key,
      q,
    },
  };
  axios.request(options).then((res) => {
    let allInfo = {
      date: res.data.forecast.forecastday.date,
      maxtemp: res.data.forecast.forecastday.day.maxtemp_f,
      mintemp: res.data.forecast.forecastday.day.mintemp_f,
      sunrise: res.data.forecast.forecastday.astro.sunrise,
      sunset: res.data.forecast.forecastday.astro.sunset,
    };
    for (item in allInfo) {
      let list = document.createElement("li");
      list.textcontent = weather[item];
      document.getElementById("more-info").appendChild(list);
    }
  });
});
