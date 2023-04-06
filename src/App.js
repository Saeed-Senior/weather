import MainWeather from "./components/first-block/MainWeather";
import Search from "./components/second-block/Search";
import SliderWeather from "./components/first-block/Slider";
import Stations from "./components/first-block/Stations";
import Events from "./components/second-block/Events";
import Measure from "./components/second-block/Measure";
import { useSelector } from "react-redux";

function App() {

  const weather = useSelector(state => state.weather);
  const loading = useSelector(state => state.loading);

  return (
      <div className="App text-white lg:flex lg:flex-row-reverse justify-between max-w-[1300px] mx-auto bg-gradient-to-r from-gradient-to to-gradient-from">
      {loading ? (
        <>
        <div className="fixed w-full h-screen z-[-1] top-0 left-0 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <span class="loader inline-block"></span>
            <span className="block mt-5">Please check the correctness of the data set.</span>
            </div>
          </div>
        <Search/>
        </>
        )
        : (
        <>
        <div className='lg:w-2/5 p-10 bg-gradient-to-br from-white/40 to-white/20 flex flex-col items-center'>
        <Search/>
        {typeof weather.name === 'undefined' ? (
          <p></p>
        ) : (
          <div className="hidden lg:block">
          <Events/>
          <Measure/>
          </div>
        )}
      </div>
      <div className="lg:w-3/5 relative py-10 px-4">
      <MainWeather/>
      <Stations/>
      <SliderWeather/>
      </div>
        </>
      )}
    </div>
  );
}

export default App;
