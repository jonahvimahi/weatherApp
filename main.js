const key = config.MY_API_KEY
const baseURL = "http://api.weatherapi.com/v1"
document.getElementById('search').onclick = function () {
    axios.get(`${baseURL}/current.json`).then
    (function (response) {
        const data = response.data
    })
}