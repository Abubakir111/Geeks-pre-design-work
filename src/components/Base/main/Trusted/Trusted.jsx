import image1 from '../../../../assets/images/big_girl.jpg'
import image2 from '../../../../assets/images/little_girl.png'
import image3 from '../../../../assets/images/curly_girl.jpg'
import clinique from '../../../../assets/images/clinique.png'
import river from '../../../../assets/images/river.png'
import mm from '../../../../assets/images/mm.png'
import youtube from '../../../../assets/images/youtube_icon.png'

const Trusted = () => {
  return (
        <div className='flex flex-1 flex-col w-full h-[673px]  bg-[#17002E] '>
            <h1 className="max-w-[507px] max-h-45px text-[#fff] font-bold text-4xl flex mx-auto mt-20 flex-col">Trusted by leading brands</h1>
            <div className="w-[1180px] h-[448px] bg-[#fff] flex flex-1 flex-col md:flex-row lg:flex-row mx-5 p-1 mt-20 mb-10 lg:mx-2 md:mx-2 justify-between">
                <div>
                    <img src={image1} alt="image" className="w-[380px] h-[205px]"/>
                    <a href="#" className="absolute flex justify-center items-center mx-10 px-20 top-80">
                        <img src={youtube} alt="youtube" />
                    </a>
                    <img src={clinique} alt="clinique" className="mx-auto"/>
                    <p className="text-[#6F2CFF] w-[185px] h-[88px] mx-auto">Clinique builds relationships with millions of customers each year.</p>
                </div>
                <div>
                    <img src={image2} alt="image" className="w-[380px] h-[205px]"/>
                    <a href="#" className="absolute flex justify-center items-center mx-10 px-20 top-80">
                        <img src={youtube} alt="youtube" />
                    </a>
                    <img src={river} alt="river" className="mx-auto"/>
                    <p className="text-[#6F2CFF] w-[185px] h-[88px] mx-auto">River island transforms the customer experience with personalization.</p>
                </div>
                <div>
                    <img src={image3} alt="image" className="w-[380px] h-[205px]"/>
                    <a href="#" className="absolute flex justify-center items-center mx-10 px-20 top-80">
                        <img src={youtube} alt="youtube" />
                    </a>
                    <img src={mm} alt="" className="mx-auto"/>
                    <p className="text-[#6F2CFF] w-[185px] h-[88px] mx-auto">MandM Direct drives increase in revenue with deep learning recs</p>
                </div>
            </div>
        </div>
    );
};

export default Trusted;
