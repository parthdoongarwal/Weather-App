
const heading = document.getElementById("heading");
const temprature = document.getElementById("temp")
const cloud = document.getElementById("cloud")
const dec = document.getElementById("cloudy")
const humidit = document.getElementById("humidity")
const speedd = document.getElementById("speed")
const body = document.getElementById("body")

async function weather(){
    const input = document.getElementById("weatherInput").value
    const fetc = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=e505550310548a009a4faff5098165a1`)
    const data = await fetc.json()

  
    // getting all the values
    if(data.cod == 404){
        heading.textContent = "Place not found "
    temprature.textContent = ``

    cloud.src = ``
    dec.textContent = ``
    humidit.textContent = ``
    speedd.textContent = ``

    }

    // const heading = document.getElementById("heading");
    // const temprature = document.getElementById("temp")
    // const cloud = document.getElementById("cloud")
    // const dec = document.getElementById("cloudy")
    // const humidit = document.getElementById("humidity")
    // const speedd = document.getElementById("speed")
    // const body = document.getElementById("body")

    const { name , wind: {speed} } = data
    const {description , icon} = data.weather[0]
    const {temp , humidity} = data.main

    body.style.background = `url("https://source.unsplash.com/1600x900/?${name}")`    
    heading.textContent = `Weather in ${name}`
    temprature.textContent = `${temp} *C`

    cloud.src = `https://openweathermap.org/img/wn/${icon}.png`
    dec.textContent = `${description}`
    humidit.textContent = `humidity: ${humidity}%`
    speedd.textContent = `Wind speed: ${speed} km/h`

    
}
