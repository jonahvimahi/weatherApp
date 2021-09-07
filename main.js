const key = config.MY_API_KEY
const baseURL = "http://api.weatherapi.com/v1"


document.getElementById('enter').addEventListener("click", () =>  {
    let q = document.getElementById("search").value
    let current = '/current.json'
    
    let options = {
        method: 'GET',
        url: baseURL + current,
        params: {
            key,
            q,
        }
    }
    axios.request(options).then(res => {
        console.log(res.data)
        
    })
})