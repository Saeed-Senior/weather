import { useSelector } from "react-redux";
import timeImg from '../../img/time.png';


function Events() {
   const events = useSelector(state => state.weather);

   let hours1 = new Date(events.sys.sunrise * 1000).getHours(),
   minuts1 = new Date(events.sys.sunrise * 1000).getMinutes();
if (hours1 > 12){
   hours1 = hours1 - 12;
};

let hours2 = new Date(events.sys.sunset * 1000).getHours(),
   minuts2 = new Date(events.sys.sunset * 1000).getMinutes();
if (hours2 > 12){
   hours2 = hours2 - 12;
} 

   return(
      <div className="flex justify-between w-full mt-14">

         <div className="flex flex-col items-center mt-10">
            <h3 className="font-light text-3xl mb-7">Sunrise</h3>
            <div className="flex flex-col items-center px-4 pt-7 pb-9 rounded-full bg-white/30">
            <img className="max-w-[68px]" src={timeImg} alt="img" />
            <span className="block text-[28px] mt-7 mb-1">{`${hours1}:${minuts1}`}</span>
            <span className="block text-[22px] text-white/70">{`${hours1}:${minuts1 + 10}`}</span>
            </div>
         </div>

         <div className="flex flex-col items-center">
         <h3 className="font-light text-3xl mb-7">Golden Hour</h3>
            <div className="flex flex-col items-center px-4 py-11 rounded-full bg-white/30">
            <img className="max-w-[68px]" src={timeImg} alt="img" />
            <span className="block text-[28px] mt-7 mb-1">{`${hours1 - 1}:${minuts1}`}<span className="text-sm">AM</span></span>
            <span className="block text-[22px] text-white/70">{`${hours2 - 1}:${minuts2}`}<span className="text-sm">PM</span></span>
            </div>
         </div>

         <div className="flex flex-col items-center mt-10">
         <h3 className="font-light text-3xl mb-7">Sunset</h3>
            <div className="flex flex-col items-center px-4 pt-7 pb-9 rounded-full bg-white/30">
            <img className="max-w-[68px]" src={timeImg} alt="img" />
            <span className="block text-[28px] mt-7 mb-1">{`${hours2}:${minuts2}`}</span>
            <span className="block text-[22px] text-white/70">{`${hours2}:${minuts2 + 10}`}</span>
            </div>
         </div>

      </div>
   )
}

export default Events;