import React from 'react'

const Main = ({mainWeather}) => {
  
    let {humidity, temp, visibility, weather} = mainWeather;
    return (
        <div className="city-weather__main">
            <div className="main-weather__icon">
                <img src={"http://openweathermap.org/img/wn/" + weather[0].icon + ".png"}></img>
                <h4>{weather[0].description}</h4>
            </div>
            <div className="main-weather__tempature">
                {Math.round(temp - 273) + "°C"}
            </div>
            <div className="main-weather__more">
                <span>Humidity: {humidity}%</span>
                
                <span>Visibility: {Math.round(visibility/1000)}km</span>
            </div>
        </div>
    )
}

export default Main
