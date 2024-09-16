import Header from "../../components/Header";
import slider_img from '../../assests/Slider/frame1.png';
import animation1 from '../../assests/Service/Animation1.png';
import animation2 from '../../assests/Service/Animation2.png';
import animation3 from '../../assests/Service/Animation3.png';

import play from '../../assests/About/Play_button.png';
import imgAbout from '../../assests/About/imgAbout.png';
import { ServiveBoxMain, ImgBox, Heading, Paragraph } from './HomeStyled'
import Proteams from "../../components/Proteams";

import contact_img from '../../assests/Contact/Contact_Animations.png';
import './Home.css';
import Footer from "../../components/Footer";

function Home(){
    return(
        <>
            <Header/>

            <div>
            <div className='max-w-screen-2xl font-poppins flex justify-between pt-[144px] pl-[145px] 
                       '>
                <div className='pt-[60px] pb-[60px] pl-[43px] w-2/3'>
                    <h1 className="font-semibold text-[#091156] text-[48px] leading-[60px] -tracking-[0.2px]">
                        Clinic & beauty consultant
                    </h1>


                    <p className='text-[16px] font-medium leading-[24px] tracking-[1.65px] text-[#091156]  pl-px pt-2'>
                        It is a long established fact that a reader will be by the readable content of a page.
                    </p>

                    <div className='pt-[34px]'>
                        <button className='w-[200px] h-[58.36px] rounded-[50px] bg-[#FF64AE] border-0 text-[16px] text-white tracking-[1.6px] font-semibold pl-[10px] pb-[2px] font-poppins pl-[2px]
                        '>More Details</button>
                    </div>
                </div>

                <div className=' w-full pt-1 pl-[13px]'>
                    <img className='' src={slider_img} alt='Logo' />
                </div>
            </div>

            <div className='flex justify-center items-center pt-[136px]'>
                <div className="w-[14.82px] h-[3.09px] bg-[#EEEEEE] rounded-[50px] mr-[5px]"></div>
                <div className="w-[25.31px] h-[8.15px] bg-[#414880] rounded-[50px]"></div>
                <div className="w-[14.82px] h-[3.09px] bg-[#EEEEEE] rounded-[50px] ml-[5px]"></div>
            </div>
            </div>

            <div className='max-w-screen-2xl font-poppins
            '>
                <div className='text-center pt-[131px] max-w-[850px] m-0 m-auto'>
                    <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] max-md:text-[14px] '>Main Services</h4>
                    <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] max-w-[450px] m-0 m-auto pt-[12px]'>Learn services to focus on your beauty</h1>
                    <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[18px]'>Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</p>
                </div>

                <div className='flex justify-between max-w-[1140px] m-0 m-auto pt-[86px] 
                 '>
                    <ServiveBoxMain className='hover:shadow-custom-hover'>
                        <ImgBox src={animation1} alt='Beauty consultation' />
                        <Heading>Beauty consultation</Heading>
                        <Paragraph>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</Paragraph>
                    </ServiveBoxMain>

                    <ServiveBoxMain className='hover:shadow-custom-hover'>
                        <ImgBox src={animation2} alt='Beauty consultation' />
                        <Heading>Skin treatments</Heading>
                        <Paragraph>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</Paragraph>
                    </ServiveBoxMain>

                    <ServiveBoxMain className='hover:shadow-custom-hover'>
                        <ImgBox src={animation3} alt='Beauty consultation' />
                        <Heading>Beauty product</Heading>
                        <Paragraph>Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis.</Paragraph>
                    </ServiveBoxMain>
                </div>
            </div>

            <div className='max-w-screen-2xl font-poppins flex pt-[135px] pl-[150px] pr-[145px] 
            '>
            <div className='w-[80%] max-xl:text-center'>
                    <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]'>About Us</h4>
                    <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[11px] -tracking-[0.1px] whitespace-nowrap'>We are the best beauty clinic</h1>
                    <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[19px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
                    <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[25px] '>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</p>
                    <div className='flex pt-[53px] '>
                        <div className='about-btn-learnmore'>
                            <button className='w-[200px] h-[57px] rounded-[50px] bg-[#FF64AE] border-0 text-[16px] text-[#ffffff] tracking-[1.7px] font-medium font-poppins 
                            
                            '>Learn More</button>
                        </div>
                        <div className='flex pl-[40px] '>
                            <img className='' src={play} alt='abc'></img>
                            <p className='text-[16px] font-semibold leading-[24px] text-[#8b8b8b] tracking-[1.6px] whitespace-nowrap pl-[10px] pt-[16px] '>Watch Video</p>
                        </div>
                    </div>
                </div>

                <div className='w-full max-md:w-none'>
                    <img className='min-w-[624px] -mt-[30px] ml-[59px] object-cover
                   
                    ' src={imgAbout} alt='abc'></img>
                </div>
            </div>

            <Proteams/>


            <div className="max-w-screen-2xl font-poppins flex justify-between pt-[144px] pl-[150px] pr-[150px] 
            ">
                <div className='pt-[158px] '>
                    <img src={contact_img} alt='abc'></img>
                </div>


                <div className='w-[45.5%] max-xl:text-center '>
                    <h5 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]'>Contact Us</h5>
                    <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] -tracking-[0.3px] w-[71%] pt-[12px] '>Send your inquiry to our expert team</h1>
                    <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[19px]'>Lorem ipsum dolor sit amet nulla turapis tellus.</p>

                    <form className='pt-[47px]'>
                        <div className='flex justify-between'>
                            <input className='w-[46.4%] h-[60px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px]' type="text" placeholder="First name"></input>
                            <input className='w-[46.4%] h-[60px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px]' type="text" placeholder="Last name"></input>
                        </div>

                        <div className='pt-[40px]'>
                            <input className='w-[100%] h-[60px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px]' type="email" placeholder='Email address'></input>
                        </div>

                        <div className='pt-[39px]'>
                            <input className='w-[100%] h-[62px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px]' type="text" placeholder='Subject message'></input>
                        </div>

                        <div className='pt-[38px]'>
                            <textarea className="w-[100%] h-[239px] rounded-[15px] border border-solid border-[#D9DDFE] pl-[23px] pt-[26px]" type="text" placeholder="Your inquiry here"></textarea>
                        </div>
                    </form>

                    <div className='pt-[49px]'>
                        <button className='w-[48%] h-[58px] bg-[#ff64ae] text-[#ffffff] text-[16px] font-semibold leading-[24px] tracking-[1.8px] text-center rounded-full border-none pb-[3px] font-poppins'>Send Message</button>
                    </div>
                </div>
            </div>

            <Footer/>
            
        </>
    )
}

export default Home;