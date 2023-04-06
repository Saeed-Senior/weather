import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';
import imgCloud from '../../img/cloud.png'

function SliderWeather() {
   const weath = useSelector(state => state.weather)
   let bodyWidth = document.body.clientWidth;
   return(
      <>
      {typeof weath.name === 'undefined' ? (
         <p></p>
      ) : (
         <div className='max-w-[300px] sm:max-w-[500px] mx-auto lg:mx-0 mt-[50px] relative'>
      <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={30}
      slidesPerView={bodyWidth > 768 ? 4 : bodyWidth > 500 ? 3 : 'auto'}
      navigation
      grabCursor={true}
      className='slider'
   >
      <div className="container-swiper">
      <SwiperSlide>
         <div className='slide'>
         <span>{parseInt(weath.main.temp - 273.15)}°C</span>
         <img src={imgCloud} alt="img" />
         <span>Mon</span>
         </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className='slide'>
         <span>{parseInt(weath.main.temp - 273.15)}°C</span>
         <img src={imgCloud} alt="img" />
         <span>Tue</span>
         </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className='slide'>
         <span>{parseInt(weath.main.temp - 273.15)}°C</span>
         <img src={imgCloud} alt="img" />
         <span>Wed</span>
         </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className='slide'>
         <span>{parseInt(weath.main.temp - 273.15)}°C</span>
         <img src={imgCloud} alt="img" />
         <span>Thu</span>
         </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className='slide'>
         <span>{parseInt(weath.main.temp - 273.15)}°C</span>
         <img src={imgCloud} alt="img" />
         <span>Fri</span>
         </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className='max-w-[200px] flex flex-col items-center rounded-xl bg-white/10 border border-white py-4'>
         <span>{parseInt(weath.main.temp - 273.15)}°C</span>
         <img src={imgCloud} alt="img" />
         <span>Sat</span>
         </div>
      </SwiperSlide>
      <SwiperSlide>
         <div className='max-w-[200px] flex flex-col items-center rounded-xl bg-white/10 border border-white py-4'>
         <span>{parseInt(weath.main.temp - 273.15)}°C</span>
         <img src={imgCloud} alt="img" />
         <span>Sun</span>
         </div>
      </SwiperSlide>
      </div>
   </Swiper>
      </div>
      )}
      </>
   )
}

export default SliderWeather;