import React , {useEffect, useReducer, useState} from 'react';
import Form from './components/Form/Form';
import City from './components/City/City';
import './App.scss'
import cuteCloud from './img/cloud1.png';
const keyy = "b40ad438d30cd97d2c827d23ceb76829";

const defaultState = {
	data: [],
	isLoading: false,
	mainWeather: {},
	timezone: 0,
	cityName: "",
	isError: false,
	isStarting: true,
}

function App() {


	const [myState, setMyState] = useState(defaultState);

	const getFetch = async (url) => {
		const response = await fetch(url);
		const tempData = await response.json();
		return tempData;
		
	}
	const getData = (cityName) =>{
		let urlCoord="https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid=" + keyy;
		let tempPromise1 = getFetch(urlCoord);
		// getFetch(urlCoord);
		console.log("data", tempPromise1)
		
		tempPromise1.then((value) => {
			if(value.cod === 200){
				let cityLat = value.coord.lat;
				let cityLon = value.coord.lon;
				let urlData = "https://api.openweathermap.org/data/2.5/onecall?lat="+cityLat+"&lon="+cityLon+"&exclude=hourly&appid=" + keyy;
				let temPromise2 = getFetch(urlData);
				temPromise2.then((valueData) => {
					setMyState({
						data: valueData.daily,
						cityName: cityName,
						mainWeather: valueData.current,
						timezone: valueData.timezone_offset,
						isLoading: false,
						isError:false,
					})
				})
			}else{
				setMyState({
					...myState,
					isLoading: false,
					isError: true,
				})
			}
		}, (error) => {
			console.log("error", error);
		})
	}

	const hanldeSubmit = (cityName) =>{
		setMyState({
			...myState,
			isLoading: true,
			isStarting: false,
			
		})
		getData(cityName);
	}



	let containerClass = "container bg-clear ";
	
	let mainScreen = "";
	if(myState.isStarting){
		mainScreen = <div>
						<img className="cute-cloud" src={cuteCloud} alt="cloud"></img>
						<h2 className="anoucement">
							Hello
						</h2>
					</div>
	}
	if(myState.isLoading){
		mainScreen =<div>
						<img className="cute-cloud" src={cuteCloud} alt="cloud"></img>
						<h2 className="anoucement">
							Loading...
						</h2>
					</div>
	}

	if(myState.isError){
		mainScreen =<div>
					<img className="cute-cloud" src={cuteCloud} alt="cloud"></img>
					<h2 className="anoucement">
						<span>Sorry! <br/> I couldn't find your city</span>
					</h2>
				</div>
	}

	return (
		
		<div className={containerClass}>
			<Form getCityName={hanldeSubmit}></Form>
			{/* {myState.isLoading ? 
				<div>
					<img className="cute-cloud" src={cuteCloud} alt="cloud"></img>
					<h2 className="anoucement">
						{myState.isError ? <span>Oops! <br/> I can't find your city</span> : "loading..."}
					</h2>
				</div>
				:
				<City
					name={myState.cityName}
					mainWeather={myState.mainWeather}
					weekday={myState.data}
					timeoffset={myState.timezone}
				></City>
			} */}
			{mainScreen}
			{mainScreen ? "" :<City
								name={myState.cityName}
								mainWeather={myState.mainWeather}
								weekday={myState.data}
								timeoffset={myState.timezone}
							></City> }
		</div>
	)
 
}

export default App;
