import './App.css';
import {useState} from 'react'
import axios from 'axios';
function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=83266f29cc8211e272bafa8f10cc614d`
  const searchLocation = (event) =>{
    if(event.key === 'Enter'){

      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data);
      })
      setLocation('')
    }
  }
  return (
    <div className="App">
      <input 
      value={location}
      onChange={event=>setLocation(event.target.value)}
      placeholder='Enter Location'
      onKeyDown={searchLocation}
      type="text" />
     <div className="container">
      <div className="top">
        <div className="location">
          {data.name ? <h2>{data.name}</h2>  : null }
          
        </div>
        <div className="temprature">
          {data.main ? <h1>{data.main.temp}°C</h1> : null}
          
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null }
          
        </div>
      </div>
      <div className="bottom">
        <div className="feels">
          {data.main ?  <p className="bold">{data.main.feels_like}°C</p> : null}
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
          
          <p>Humidity</p>
        </div>
        <div className="windy">
          {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null }
          
          <p>Wind Speed</p>
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
