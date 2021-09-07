const key = config.MY_API_KEY;
const baseURL = "http://api.weatherapi.com/v1";

document.getElementById("enter").addEventListener("click", (e) => {
    e.preventDefault()
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
          name: res.data.location.name,
          region: res.data.location.region,
          country: res.data.location.country,
          
          temp: res.data.current.temp_f,
          condition:
          res.data.current.condition.text,
        };
        for(item in weather){
            let list = document.createElement('li')
            list.textContent = weather[item]
            document.getElementById("info").appendChild(list)
        }
        let image = document.createElement('img')
        image.src = res.data.current.condition.icon
        document.getElementById('info').appendChild(image)
  });
});
