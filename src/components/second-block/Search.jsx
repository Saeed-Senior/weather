import { useDispatch, useSelector } from "react-redux";
import geoImg from '../../img/geo.png';
import searchImg from '../../img/search.png';

function Search() {
   const dispatch = useDispatch();


   function handleSubmit(e) {
      const city = e.target.elements.city.value;
      function weather() {
         return function(dispatch) {
            dispatch({type: 'loading',})
            fetch(`https://api.openweathermap.org/data/2.5/weather?appid=adbf16e841c14d44948ec117eb5d4448&q=${city}`)
            .then((res) => {
               if (res.status >= 200 && res.status < 300) {
                     return res;
               } else {
                     let error = new Error(res.statusText);
                     error.response = res;
                     throw error
               }
            })
            .then(res => res.json())
            .then(json => {
               dispatch({
                  type: 'weather',
                  payload: json,
               })
            })
            .catch((e) => {
               console.log('Error: ' + e.message);
               console.log(e.response);
               
            });
         }
      }
      e.preventDefault();
      dispatch(weather());
   }

return (
   <form className="flex w-full justify-between items-center" onSubmit={handleSubmit}>
      <img className="max-w-[30px] " src={geoImg} alt="img" />
   <input className="text-[32px] font-light bg-transparent focus:bg-transparent focus:border focus:border-white w-full outline-none py-1 px-2 mx-1 rounded" placeholder="Enter city..." name="city" type="text" />
   <button className="p-4 rounded-lg bg-gradient-to-br from-white/40 to-white/20"><img className="max-w-[26px]" src={searchImg} alt="img" /></button>
   </form>
)
}

export default Search;