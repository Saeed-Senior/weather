import circleImg from '../../img/circle.png'


function Measure() {
   return(
      <div className="w-full">
         <div className="w-full flex items-center my-12">
            <span className="block py-[1px] w-full bg-white/50 rounded">
            </span>
            <span className="cursor-pointer ml-2 italic flex items-center justify-center w-[40px] h-[40px] rounded-full bg-white/50 text-2xl">
               i
            </span>
         </div>
         <div className="flex justify-between">
            <div className="">
               <h3 className='text-3xl font-light text-center drop-shadow-lg mb-7'>Air Quality</h3>
               <div className="relative text-lg font-light">
               <img src={circleImg} alt="img" /><span className='block text-center absolute w-full bottom-[30px]'>not/data</span>
               <span className='block text-center absolute bottom-0 w-full'>
                  Moderate 
               </span>
               </div>
               </div>
            <div className="">
               <h3 className='text-3xl font-light text-center drop-shadow-lg mb-7'>UV Index</h3>
               <div className="relative text-lg font-light">
               <img src={circleImg} alt="img" /><span className='block text-center absolute w-full bottom-[30px]'>not/data</span>
               <span className='block text-center absolute bottom-0 w-full'>
                  High 
               </span>
               </div>
               </div>
         </div>
      </div>
   )
}

export default Measure;