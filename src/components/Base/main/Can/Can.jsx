import imageOne from './imageCan/bag.svg'
import imageTwo from './imageCan/Airplane.svg'
import imageThree from './imageCan/button.svg'
import imageFour from './imageCan/cubes.svg'
import imageFive from './imageCan/flowers.svg'
import imageSix from './imageCan/point.svg'

const Can = () => {
  return <div className=" container flex flex-col justify-center items-center gap-8">
    <div className="items-center justify-center">
      <h2 className="text-black text-center font-roboto text-4xl font-bold leading-10">
       We specialize in your industry.
      </h2>
      {/* asdasdad?\\\\ */}
      <p className=" text-black text-center font-roboto text-base font-normal leading-8">Learn how we are delivering personalization at scale across sectors.</p>
    </div>
    <div className="grid grid-cols-2  gap-4 items-center justify-center flex-wrap">
      <div className="w-460 h-199 flex-shrink-0 bg-purple-950 rounded-tl-8 rounded-br-8 rounded-tr-10 rounded-bl-10">
        <img src={imageFive} alt="flower" className='pt-2 pl-2' />
        <h4 className='text-white font-roboto text-lg font-bold leading-6 pl-20'>Beauty and cosmetics</h4>
        <p className='text-white font-roboto text-base font-normal leading-6 mb-2'>Discover relevant products. Push samples. Upsell and replenish.</p>
        <p className="text-white font-roboto text-base font-normal leading-5 border-b-2 border-white mb-2">Explore our solutions for beauty and cosmetics.</p>
      </div>
      <div className="w-460 h-199 flex-shrink-0 bg-purple-950 rounded-tl-8 rounded-br-8 rounded-tr-10 rounded-bl-10">
        <img src={imageThree} alt="button" />
        <h4 className='text-white font-roboto text-lg font-bold leading-6'>Fashion</h4>
        <p className='text-white font-roboto text-base font-normal leading-6'>Supercharge merchandising. Reach your best customers.</p>
        <p className='text-white font-roboto text-base font-normal leading-5 border-b border-white'>Explore our solutions for fashion.</p>
      </div>
      <div className="w-460 h-199 flex-shrink-0 bg-purple-950 rounded-tl-8 rounded-br-8 rounded-tr-10 rounded-bl-10">
        <img src={imageOne} alt="luxury" />
        <h4 className='text-white font-roboto text-lg font-bold leading-6'>Luxury</h4>
        <p className='text-white font-roboto text-base font-normal leading-6'>Drive brand experience online. Look after your VIPs.</p>
        <p className='text-white font-roboto text-base font-normal leading-5 border-b border-white'>Explore our solutions for luxury.</p>
      </div>
      <div className="w-460 h-199 flex-shrink-0 bg-purple-950 rounded-tl-8 rounded-br-8 rounded-tr-10 rounded-bl-10">
        <img src={imageTwo} alt="Airplane" />
        <h4 className='text-white font-roboto text-lg font-bold leading-6'>Airlines</h4>
        <p className='text-white font-roboto text-base font-normal leading-6'>Increase loyalty. Boost ancillary sales. Capture every opportunity.</p>
        <p className='text-white font-roboto text-base font-normal leading-5 border-b border-white'>Explore our solutions for airlines.</p>
      </div>
      <div className="w-460 h-199 flex-shrink-0 bg-purple-950 rounded-tl-8 rounded-br-8 rounded-tr-10 rounded-bl-10">
        <img src={imageSix} alt="point" />
        <h4 className='text-white font-roboto text-lg font-bold leading-6'>Travel & tourism</h4>
        <p className='text-white font-roboto text-base font-normal leading-6'> Be persuasive. Inspire travellers. Drive revenue.</p>
        <p className='text-white font-roboto text-base font-normal leading-5 border-b border-white'>Explore our solutions for travel and tourism.</p>
      </div>
      <div className="w-460 h-199 flex-shrink-0 bg-purple-950 rounded-tl-8 rounded-br-8 rounded-tr-10 rounded-bl-10">
        <img src={imageFour} alt="cubes" />
        <h4 className='text-white font-roboto text-lg font-bold leading-6'>Online betting</h4>
        <p className='text-white font-roboto text-base font-normal leading-6'>Bring events to life. Personalize in real time. Be responsible.</p>
        <p className='text-white font-roboto text-base font-normal leading-5 border-b border-white'>Explore our solutions for online betting.</p>
      </div>
    </div>
  </div>;
};

export default Can;
