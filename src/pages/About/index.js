import Header from "../../components/Header";

import img_about from "../../assests/About/unsplash_DE6rYp1nAho.png"
import play_button from "../../assests/About/Play_button.png"
import Proteams from "../../components/Proteams";

import bg_slogan from "../../assests/Slogan/unsplash_Pe9IXUuC6QU.png"

import img_about1 from '../../assests/About/Illustration-1.png';
import img_about2 from '../../assests/About/Illustration-2.png';


import logo1 from '../../assests/Client/LOGO1.png'
import logo2 from '../../assests/Client/LOGO2.png'
import logo3 from '../../assests/Client/LOGO3.png'
import logo4 from '../../assests/Client/LOGO4.png'
import logo5 from '../../assests/Client/LOGO5.png'

import Footer from "../../components/Footer";

function About() {
    return (
        <>
            <div className="max-w-screen-2xl font-poppins">
                <Header />

                <div className="w-[79.2%] mx-auto pt-[117px] max-h-[976px]">
                    <div className="max-w-[732px]">
                        <h4 className="font-semibold text-[16px] text-[#FF64AE] leading-[20px]">About</h4>
                        <h1 className="font-semibold text-[36px] text-[#091156] leading-[45px] pt-[11px] -tracking-[0.1px]">We are a leading beauty clinic that has been around since 2002</h1>
                        <p className="font-normal text-[16px] text-[#8B8B8B] leading-[24px] tracking-[1.6px] max-w-[680px] pt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                    </div>

                    <div className="pt-[18px]">
                        <div className=" relative">
                            <img className=" max-w-none -ml-[73px]" src={img_about} alt="abc"></img>
                            <img className="absolute top-[46%] left-1/2 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2 w-[7.5%] h-auto" src={play_button} alt="abc"></img>
                        </div>
                    </div>
                </div>

                <div className="pb-[151px]">
                    <Proteams />
                </div>

                <div className="text-center pt-[164px] pb-[175px]"

                    style={{ backgroundImage: `url(${bg_slogan})` }}
                >
                    <h4 className="font-semibold text-[16px] leading-[20px] text-[#ABB4FF]">Business Slogan</h4>
                    <h1 className="font-semibold text-[36px] leading-[45px] text-[#FFFFFF] -tracking-[0.1px] max-w-[620px] m-0 m-auto pt-[12px]">Best responsibility and service for our customers</h1>
                    <p className="font-normal text-[16px] leading-[24px] text-[#CACACA] tracking-[1.6px] max-w-[680px] m-0 m-auto pt-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                </div>

                <div className='flex mx-auto w-[79%] justify-between pt-[123px]'>
                    <div className="pt-[28px] pl-[54px]">
                        <img className="w-[98%] h-[235.06px]" src={img_about1} alt="abc"></img>
                    </div>

                    <div className='w-[42%]'>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]'>Our Vision</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[14px] -tracking-[0.2px] '>Be the best and go international</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[11px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
                        <p className="text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[25px] "> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
                        
                    </div>
                </div>


                <div className='flex mx-auto w-[79%] justify-between pt-[142px]'>

                    <div className='w-[46%]'>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]'>Our Mission</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[12px] -tracking-[0.2px] '>Special & premium service to any clients</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[13px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
                        <p className="text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[25px] "> Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
                        
                    </div>

                    <div className="w-[44%] pl-[21px] -mt-[10px]">
                        <img className="w-[100%] h-[310.71px]" src={img_about2} alt="abc"></img>
                    </div>
                </div>

                <div className="pt-[126px] pb-[52px]">
                    <div className="max-w-[848px] text-center m-0 m-auto pr-[24px]" >
                        <h4 className="font-semibold text-[16px] leading-[20px] text-[#FF64AE]">Our Clients</h4>
                        <h1 className="font-semibold text-[36px] leading-[45px] text-[#091156] pt-[11px] -tracking-[0.2px]">Well-known agencies</h1>
                        <p className="font-normal text-[16px] leading-[24px] tracking-[1.6px] text-[#8B8B8B] pt-[18px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>

                    <div className="flex justify-center max-w-[962px] m-0 m-auto gap-[57px] pt-[104px]">
                        <img src={logo1} alt="abc"></img>
                        <img src={logo2} alt="abc"></img>
                        <img src={logo3} alt="abc"></img>
                        <img src={logo4} alt="abc"></img>
                        <img src={logo5} alt="abc"></img>
                    </div>
                </div>

                <Footer/>

            </div>
        </>
    )
}

export default About;