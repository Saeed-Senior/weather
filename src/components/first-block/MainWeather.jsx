import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import mainImg from '../../img/main.png';


function MainWeather() {
   const [switchToggle, setSwitchToggle] = useState(false);
   const main = useSelector(state => state.weather);

   function getMonth(date) {
      let mounth = ['Jun', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      return mounth[date];
   }
    let date1 = new Date(main.dt * 1000).getMonth();
   
   function getWeekDay(date) {
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return days[date];
   }
   let date2 = new Date(main.dt * 1000).getDay();

   let hour = new Date(main.dt * 1000).getHours();
   let min = new Date(main.dt * 1000).getMinutes();
   let time = `${hour}:${min}`;
if (hour > 12){
   hour = hour - 12;
   time = hour + ':' + min + ' pm';
} else {
   time = time + ' am';
}

function handleToggle() {
   setSwitchToggle(!switchToggle)
}

   return(
      <div className="flex flex-col items-center lg:items-start">
      {typeof main.name === 'undefined' ? (
         <p className="text-2xl text-center p-5">Welcome to weather app! Enter in a city to get the weather of.</p>
      ) : (
         <>
         <div onClick={() => handleToggle()}  className="inline-block absolute right-0 mr-[10%] w-[90px] bg-black/10 rounded-[30px]">
         <div className="w-full flex justify-between items-center text-2xl px-[15px] py-1 text-white">
            <span>C</span><span>F</span>
         </div>
         <span className={switchToggle === false ? "cursor-pointer absolute top-0 left-0 bottom-0 w-3/5 bg-black/20 rounded-[30px]" : "cursor-pointer absolute top-0 bottom-0 right-0 w-3/5 bg-black/20 rounded-[30px]"}></span>
      </div>
      <img className="max-w-[140px]" src={mainImg} alt="img" />
      <h1 className="text-[165px] font-light relative leading-none drop-shadow-lg cursor-pointer my-6">
         {switchToggle && typeof(main.main.temp) === 'number' ? 
         `${parseInt((main.main.temp - 273.15) * (9/5) + 32)}` :
         typeof(main.main.temp) === 'number' ?
         `${parseInt(main.main.temp - 273.15)}` :
         'City name'}
         <span className="text-[16px] absolute top-0 drop-shadow-lg">
            {switchToggle && typeof(main.main.temp) === 'number' ?
            '°F' : typeof(main.main.temp) === 'number' ? '°C' : ''}
            </span>
            </h1>
      <h2 className="text-3xl font-light">{`${new Date(main.dt * 1000).getDate()}th ${getMonth(date1)}`}</h2>
      <h2 className="text-2xl font-light mt-4 mb-10">{getWeekDay(date2)} <span className="mx-4 text-[18px]">|</span> {time}</h2>
         </>
      )}
      </div>
   )
}

export default MainWeather;