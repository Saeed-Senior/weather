import { useSelector } from "react-redux";
import windImg from '../../img/wind.png';
import humImg from '../../img/hum.png';

function Stations() {
   const stations = useSelector(state => state.weather)
   return(
      <>
      {typeof stations.name === 'undefined' ? (
         <p></p>
      ) : (
         <div>
      <p className="flex justify-center lg:justify-start items-center text-sm sm:text-[22px] font-light">
         <span className="flex items-center mr-4">
            <img className="max-w-[16px] mr-2 sm:mr-4" src={windImg} alt="img" />
            Wind {parseInt(stations.wind.speed)} km/h
            </span>
            | 
            <span className="flex items-center mx-4">
            <img className="max-w-[16px] mr-2 sm:mr-4" src={humImg} alt="img" />
            Hum {stations.main.humidity}%
            </span>
            | 
            <span className="flex items-center ml-4">
            <img className="w-[20px] mr-2 sm:mr-4" src={`https://openweathermap.org/img/wn/${stations.weather[0].icon}@2x.png`} alt="img" />
            {stations.weather[0].main}
            </span>
            </p>
      </div>
      )}
      </>
   )
}

export default Stations;