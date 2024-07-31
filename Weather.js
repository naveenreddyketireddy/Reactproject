// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'
// import './Weather.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import pic from './images/humidity.svg'
// let message
// let day=new Date()
// let date=day.getDate()
// let month=day.getMonth()
// let year=day.getFullYear()
// if(day.getDay()===1){
//   message="Monday"
// }else if(day.getDay()===2){
//   message="Tuesday"
// }else if(day.getDay()===3){
//   message="Wensday"
// }else if(day.getDay()===4){
//   message="Thursday"
// }else if(day.getDay()===5){
//   message="Friday"
// }else if(day.getDay()===6){
//   message="Saterday"
// }else{
//   message="Sunday"
// }
// export default function Weather(){
//         const [state,setState]=useState({})
//         const [state1, setState1]=useState([])
//         const [state2, setState2]=useState([])
//         const [state3, setState3]=useState([])
//         const [state4,setState4]=useState({})
//         const [state5, setState5]=useState([])
//         const [loc,setLoc]=useState({})
//         const [currentTime, setCurrentTime] = useState(new Date());

//         const location=(e)=>{
//           setLoc(e.target.value)
//         }
        
//         const Updata=()=>{
//         axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=11c15604a23bd024c1c83c12bf0a9e6f`)
//       .then((res) => {
//         // console.log(res)
//         // console.log(res.main)
//         setState(res.data.main)
//       setState1(res.data.clouds)
//       setState2(res.data.sys)
//       setState3(res.data.name)
//       setState4(res.data.wind)
//       setState5(res.data.weather)
//       setCurrentTime(new Date())
// })
//         }
//         const name=state5.map((x)=>x.icon)
//         var link=`http://openweathermap.org/img/w/${name}.png`
//   return (
//     <>
//     <div className='container-fluid' id='weath'>
//       <div className='row'>
//         <div className='col-md-4' id='head1'>
//           <h4>Weather<br/>&Fourcast</h4>
//         </div>
//         <div className='col-md-4' id='head2'>
//           <h4>{message},<br/>
//           {currentTime.toLocaleTimeString()}
//           </h4>
//         </div>
//         <div className='col-md-4' id='head3'>
//         <h4>Date</h4>
//         <h5>{date}/{month+1}/{year}</h5>
//         </div>
//         </div>
//         <div className='row'>
//           <div className='col-md-10'>
//           <input type='text' placeholder='Enter your city' id='weain' onChange={location}/>
//           </div>
//           <div className='col-md-2'>
//           <button id='weabut' onClick={Updata}>Get Data</button>
//           </div>
//         </div>
//         <div className='row m-5'>
//           <div className='col-md-12'>
//         <h4 className='text-center'>CURRENT WEATHER</h4>
//         </div>
//         </div>
//         <div className='row'>
//           <div className='col-md-4'>
//             <h5>{state3},{state2.country}<br/>{date}/{month+1}/{year},<small>{message}</small></h5>
//           </div>
//           <div className='col-md-4'>
//             <h5>Temp <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='25px' height='25px'><path d="M448 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 96a96 96 0 1 1 192 0A96 96 0 1 1 320 96zM144 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C70.2 332.6 64 349.5 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM32 112C32 50.2 82.1 0 144 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S0 447.5 0 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM192 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z"/></svg><br/>{Math.round(isNaN(state.temp)?"":state.temp-273.15)} <sup>o</sup>C</h5>
//           </div>
//           <div className='col-md-4'>
//           <h4>DESC</h4>{state5.map((x)=><h5>{x.description}</h5>)}<img src={link} alt='' />
//           </div>
//       </div>
//       <div className='row m-5'>
//         <div className='col-md-12'>
//           <h4 className='text-center'>ALL CONDITIONS</h4>
//         </div>
//         <div className='row'>
//           <div className='col-md-3'>
//           <h5>Temp <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='25px' height='25px'><path d="M448 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM320 96a96 96 0 1 1 192 0A96 96 0 1 1 320 96zM144 64c-26.5 0-48 21.5-48 48V276.5c0 17.3-7.1 31.9-15.3 42.5C70.2 332.6 64 349.5 64 368c0 44.2 35.8 80 80 80s80-35.8 80-80c0-18.5-6.2-35.4-16.7-48.9c-8.2-10.6-15.3-25.2-15.3-42.5V112c0-26.5-21.5-48-48-48zM32 112C32 50.2 82.1 0 144 0s112 50.1 112 112V276.5c0 .1 .1 .3 .2 .6c.2 .6 .8 1.6 1.7 2.8c18.9 24.4 30.1 55 30.1 88.1c0 79.5-64.5 144-144 144S0 447.5 0 368c0-33.2 11.2-63.8 30.1-88.1c.9-1.2 1.5-2.2 1.7-2.8c.1-.3 .2-.5 .2-.6V112zM192 368c0 26.5-21.5 48-48 48s-48-21.5-48-48c0-20.9 13.4-38.7 32-45.3V272c0-8.8 7.2-16 16-16s16 7.2 16 16v50.7c18.6 6.6 32 24.4 32 45.3z"/></svg><br/>{Math.round(isNaN(state.temp)?"":state.temp-273.15)} <sup>o</sup>C</h5>
//           </div>
//           <div className='col-md-3'>
//             <h5>wind <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='25px' height='25px'><path d="M288 32c0 17.7 14.3 32 32 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H352c53 0 96-43 96-96s-43-96-96-96H320c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384c-17.7 0-32 14.3-32 32zM128 512h32c53 0 96-43 96-96s-43-96-96-96H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H160c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/></svg><br/>{state4.speed} m/s</h5>
//           </div>
//           <div className='col-md-3'>
//           <h5>Clouds <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width='25px' height='25px'><path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/></svg><br/>{state1.all} %</h5> 
//           </div>
//           <div className='col-md-3'>
//             <h5>Humidity <img src={pic} /> <br/>{state.humidity} %</h5>
//           </div>
//         </div>
//       </div>
//       </div>
//     </>
//   )
// }



import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Weather.css'; // External CSS file for styling
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
 
export default function Weather (){
  const [weatherData, setWeatherData] = useState({});
  const [cloudsData, setCloudsData] = useState({});
  const [sysData, setSysData] = useState({});
  const [windData, setWindData] = useState({});
  const [weatherDesc, setWeatherDesc] = useState([]);
  const [location, setLocation] = useState('');
  const [cityname, setCityname] = useState([])
  const [other, setOther] = useState([])
  const [time,setTime] = useState()
  const updateWeather = () => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=11c15604a23bd024c1c83c12bf0a9e6f`)
      .then((res) => {
        setWeatherData(res.data.main);
        setCloudsData(res.data.clouds);
        setSysData(res.data.sys);
        setWindData(res.data.wind);
        setWeatherDesc(res.data.weather);
        setCityname(res.data.name);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  };
  useEffect(() => {
    let timer = setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return () => clearTimeout(timer)
  });
  const weatherIcons = weatherDesc.map((item) => (
    <img
      key={item.id}
      src={`http://openweathermap.org/img/w/${item.icon}.png`}
      alt={item.description}
    />
  ));
 
  const date = new Date();
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
 
  return (
  
    <div className="container-fluid" id="main">
      <div className="row">
        <div className="col-md-6">
          <h5 className="header"><span style={{color:"orange"}}>THE </span> <span style={{color:"white"}}>WEATHER </span><br/><span style={{color:"green"}}>FORECASTING</span></h5>
          {time}
        </div>
       
        <div className="col-md-6 date">
          <h5 className="header">DATE</h5>
          <h5>{formattedDate}</h5>
        </div>
      </div>
 
      <div className="row">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            id="inputCity"
            placeholder="Enter your city"
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
      </div>
 
      <div className="row">
        <div className="col-md-2">
          <button className="btn btn-light" id="getDataBtn" onClick={updateWeather}>
            Get Data
          </button>
        </div>
      </div>
 
      <div className="row">
        <div className="col-md-12">
          <h4 className="text-center"><b>CURRENT WEATHER</b></h4>
        </div>
      </div>
 
      <div className="row">
        <div className="col-md-4">
          <h5>
            {cityname}, {sysData.country}
            <br />
            {formattedDate}
          </h5>
        </div>
        <div className="col-md-4">
          <h5>
             Temp
            <br />
            {Math.round(isNaN(weatherData.temp)?"":weatherData.temp-273.15)} <sup>o</sup>C
          </h5>
        </div>
        <div className="col-md-4">
          <h4>DESC</h4>
          {weatherDesc.map((item) => (
            <h5 key={item.id}>
              {item.description} {weatherIcons}
            </h5>
          ))}
        </div>
      </div>
 
      <div className="row p-3">
        <div className="col-md-12">
          <h4 className="text-center"><b>ALL CONDITIONS</b></h4>
        </div>
      </div>
 
      <div className="row">
        <div className="col-md-3">
          <h5>
            Temp
            <br />
            {Math.round(isNaN(weatherData.temp)?"":weatherData.temp-273.15)} <sup>o</sup>C
          </h5>
        </div>
        <div className="col-md-3">
          <h5>
            Wind
            <br />
            {windData.speed} m/s
          </h5>
        </div>
        <div className="col-md-3">
          <h5>
            Clouds
            <br />
            {cloudsData.all} %
          </h5>
        </div>
        <div className="col-md-3">
          <h5>
            Humidity
            <br />
            {weatherData.humidity} %
          </h5>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 text-center'>
          <h5>Other Details</h5>
          <h6>Pressure: {weatherData.pressure}</h6>
          <h6>Sea-level: {weatherData.sea_level}</h6>
          <h6>Ground-level: {weatherData.grnd_level}</h6>
        </div>
      </div>
    </div>
  )
}