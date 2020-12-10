// console.log("Hello World!")

function getData(){
    // console.log("This works!")

    let city = document.querySelector("#city").value 
    // console.log(city)
    let apiKey = "YOUR-API-KEY"

    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
    .then(response => response.json())
    .then(
        rawData => {
            console.log(rawData)
            let cityTable = document.querySelector("#city-weather")
            cityTable.style.display = "block"

            let cityName = rawData.name
            let cityNameDiv = document.querySelector("#city-name")
            cityNameDiv.innerHTML = cityName

            let cityCurrent = rawData.main.temp
            let cityCurrentDiv = document.querySelector("#current")
            cityCurrentDiv.innerHTML = "<b>Current Temp: </b>" + cityCurrent + "&#8457;"

            let cityHigh = rawData.main.temp_max
            let cityHighDiv = document.querySelector("#hi")
            cityHighDiv.innerHTML = "<b>High: </b>" + cityHigh + "&#8457;"

            let cityLow = rawData.main.temp_min
            let cityLowDiv = document.querySelector("#lo")
            cityLowDiv.innerHTML = "<b>Low: </b>" + cityLow + "&#8457;"

            let cityFeelsLike = rawData.main.feels_like
            let cityFeelsLikeDiv = document.querySelector("#feelsLike")
            cityFeelsLikeDiv.innerHTML = "<b>Feels Like: </b>" + cityFeelsLike + "&#8457;"

            let cityDesc = rawData.weather[0].description
            let cityDescDiv = document.querySelector("#desc")
            cityDescDiv.innerHTML = "<b>Description: </b>" + cityDesc

            let cityRise = rawData.sys.sunrise * 1000
            let cityRiseDate = new Date(cityRise)
            let cityRiseDiv = document.querySelector("#rise")
            cityRiseDiv.innerHTML = "<b>Sunrise: </b>" + cityRiseDate

            let citySet = rawData.sys.sunset * 1000
            let citySetDate = new Date(citySet)
            let citySetDiv = document.querySelector("#set")
            citySetDiv.innerHTML = "<b>Sunset: </b>" + citySetDate

        }
    )
}