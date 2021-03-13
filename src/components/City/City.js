import React from 'react'
import Main from '../MainWeather/Main';
import Weekday from '../Weekday/Weekday';
const City = ({mainWeather, weekday, name, timeoffset}) => {

    // console.log(mainWeather, weekday, name, timeoffset)
    let timeToDisplay = new Date(mainWeather.dt*1000 + timeoffset*1000).toUTCString().split(' ').slice(0,4).join(' ');
    
    return (
        <div className="city-weather__container">
            <div className="city-weather__header">
                <h1>{name}</h1>
                <h4>{timeToDisplay}</h4>
            </div>
           
            <Main mainWeather={mainWeather}></Main>

            <Weekday timeoffset={timeoffset} weekday={weekday}></Weekday>
        </div>
    )
}

export default City
