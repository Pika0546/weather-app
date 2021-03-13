import React from 'react'

const Weekday = ({weekday, timeoffset}) => {
    console.log(weekday)
    let myWeek = weekday.map((item, index)=>{
        if(index === 0 || index === 7){
            return "";
        }
        else{
            let {dt, temp, weather} = item;
            let timeToDisplay = new Date(dt*1000 + timeoffset*1000).toUTCString().split(' ').slice(0,2).join(' ');
            return (<div key={index} className="city-weather__weekday__dow">
                        <div className="city-weather__weekday__date">
                           {timeToDisplay}
                        </div>
                        <div className="city-weather__weekday__icon">
                            <img src={"http://openweathermap.org/img/wn/" + weather[0].icon + ".png"}></img>
                            <h4>{weather[0].main}</h4>
                        </div>
                        <div className="city-weather__weekday__info">
                            <span>{Math.round(temp.day)- 273 + "°C"}</span>
                        </div>
                    </div>)
        }
    })
    return (
        <div className="city-weather__weekday">
            {myWeek}
        </div>
    )
}

export default Weekday
