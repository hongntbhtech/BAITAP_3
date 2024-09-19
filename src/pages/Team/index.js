import Header from "../../components/Header";
import actor1 from '../../assests/Proteams/unsplash_pTrhfmj2jDA.png';
import actor2 from '../../assests/Proteams/unsplash_FVh_yqLR9eA.png';
import actor3 from '../../assests/Proteams/unsplash_mEZ3PoFGs_k.png';
import icon1 from '../../assests/Proteams/Twitter.png';
import icon2 from '../../assests/Proteams/Facebook.png';
import icon3 from '../../assests/Proteams/Instagram.png';

import img_team1 from '../../assests/Team/unsplash_byGTytEGjBo.png'
import img_team2 from '../../assests/Team/unsplash_8YG31Xn4dSw.png'
import img_team3 from '../../assests/Team/unsplash_Fsgzm8N0hIY.png'

import bg_team from '../../assests/Team/unsplash_rE6FqsyyqwM.png'

import img_team4 from '../../assests/Team/unsplash_Z5g_6TLS6Ho.png'
import img_team5 from '../../assests/Team/Vector.png'
import img_team6 from '../../assests/Team/arrow-right.png'
import img_team7 from '../../assests/Team/star.png'
import img_team8 from '../../assests/Team/star.png'
import img_team9 from '../../assests/Team/star.png'
import img_team10 from '../../assests/Team/star.png'
import img_team11 from '../../assests/Team/star.png'


import { ProteamsBoxMain, ImgBox, Heading,Heading1, Para, SocialMedia, SocialMedia1} from './TeamStyled'
import Footer from "../../components/Footer";
function Team(){
    return(
        <>
        <div className="max-w-screen-2xl font-poppins ">
            <Header/>

            <div className='max-w-[1085px] mx-auto pt-[118px]
            max-md:w-[90%] max-md:mx-auto
            2xl:w-[80%] 2xl:mx-auto
            '>
                <div className='text-center max-w-[800px] m-0 m-auto pr-[79px]'>
                    <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]
                    max-md:text-[14px]'>Our Team</h4>
                    <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[12px]
                    max-md:text-[40px] max-sm:text-[37px] max-ssm:text-[33px]
                    '             
                    >We are Professional</h1>
                    <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[23px]
                    max-md:text-[14px] max-md:text-[12px]
                    '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>

                <div className='flex justify-between max-w-[1085px] m-0 m-auto pt-[95px]
                 max-xl:flex-col max-xl:items-center
                '>
                    <ProteamsBoxMain className='hover:shadow-custom-hover hover:min-w-[424px] rounded-[42px]'>
                        <ImgBox src={actor1} alt='abc'></ImgBox>
                        <Heading>Surgeon</Heading>
                        <Heading1>Briyan Nevalli</Heading1>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Para>
                        <SocialMedia className='social-media'>
                            <SocialMedia1 src={icon1} alt='abc'></SocialMedia1>
                            <SocialMedia1 src={icon2} alt='abc'></SocialMedia1>
                            <SocialMedia1 src={icon3} alt='abc'></SocialMedia1>
                        </SocialMedia>
                    </ProteamsBoxMain>

                    <ProteamsBoxMain className='hover:shadow-custom-hover hover:min-w-[424px] rounded-[42px]'>
                        <ImgBox src={actor2} alt='abc'></ImgBox>
                        <Heading>Dermatologist</Heading>
                        <Heading1>Bella sebastian</Heading1>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Para>
                        <SocialMedia className='social-media'>
                            <SocialMedia1 src={icon1} alt='abc'></SocialMedia1>
                            <SocialMedia1 src={icon2} alt='abc'></SocialMedia1>
                            <SocialMedia1 src={icon3} alt='abc'></SocialMedia1>
                        </SocialMedia>
                    </ProteamsBoxMain>

                    <ProteamsBoxMain className='hover:shadow-custom-hover hover:min-w-[424px] rounded-[42px]'>
                        <ImgBox src={actor3} alt='abc'></ImgBox>
                        <Heading>Stylist expert</Heading>
                        <Heading1>Lilly Adams</Heading1>
                        <Para>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit</Para>
                        <SocialMedia className='social-media-right'>
                            <SocialMedia1 src={icon1} alt='abc'></SocialMedia1>
                            <SocialMedia1 src={icon2} alt='abc'></SocialMedia1>
                            <SocialMedia1 src={icon3} alt='abc'></SocialMedia1>
                        </SocialMedia>
                    </ProteamsBoxMain>
                </div>
            </div>

            <div className="max-w-[1290.1px] mx-auto  pt-[154px] pb-[125px]">
                <div className="text-center">
                    <h4 className="ld text-[16px] text-[#FF64AE] leadfont-semiboing-[20px]">Assistance Team</h4>
                    <h1 className="font-semibold text-[36px] text-[#091156] leading-[45px] pt-[12px] -tracking-[0.1px]">Meet the pro assistance</h1>
                    <p className="font-normal text-[16px] text-[#8B8B8B] leading-[24px] tracking-[1.6px] pt-[25px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>

                <div className="max-w-[1004px] m-0 m-auto flex justify-between pt-[113px] ml-[75px]">
                    <img src={img_team1} alt="abc"></img>
                    <div className="max-w-[434px] pt-[64px]">
                        <h5 className="font-semibold text-[18px] leading-[22.5px] text-[#091156]">Lina Gustav / <span className="font-normal italic text-[14px] leading-[17.5px] text-[#CACACA]">Pharmacist</span></h5>
                        <p className="font-normal text-[16px] leading-[24px] tracking-[1.6px] pt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</p>
                    </div>
                </div>

                <div className="max-w-[1004px] m-0 m-auto flex justify-between pt-[79px] ml-[75px]">
                    <img src={img_team2} alt="abc"></img>
                    <div className="max-w-[434px] pt-[64px]">
                        <h5 className="font-semibold text-[18px] leading-[22.5px] text-[#091156]">Adam White / <span className="font-normal italic text-[14px] leading-[17.5px] text-[#CACACA]">Finance</span></h5>
                        <p className="font-normal text-[16px] leading-[24px] tracking-[1.6px] pt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</p>
                    </div>
                </div>

                <div className="max-w-[1004px] m-0 m-auto flex justify-between pt-[79px] ml-[75px]">
                    <img src={img_team3} alt="abc"></img>
                    <div className="max-w-[434px] pt-[64px]">
                        <h5 className="font-semibold text-[18px] leading-[22.5px] text-[#091156]">Jane Doe /  <span className="font-normal italic text-[14px] leading-[17.5px] text-[#CACACA]">Marketer</span></h5>
                        <p className="font-normal text-[16px] leading-[24px] tracking-[1.6px] pt-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.</p>
                    </div>
                </div>
            </div>

            <div className="h-[529px] bg-no-repeat" style={{ backgroundImage: `url(${bg_team})` }}>
                <div className="max-w-[680px] mx-auto text-center pt-[180px]">
                    <h1 className="font-semibold text-[36px] leading-[45px] text-[#ffffff] max-w-[500px] mx-auto pl-[23px] -tracking-[0.3px] ">Customer satisfaction is our main goal</h1>
                    <p className="font-normal text-[16px] leading-[24px] tracking-[1.6px] text-[#CACACA] pt-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                </div>
            </div>

            <div className="max-w-[1140px] mx-auto pt-[119px] pb-[15px]">
                <div className="text-center">
                    <h4 className="text-[16px] font-semibold leading-[20px] text-[#ff64ae]">Our Testimonials</h4>
                    <h1 className="text-[36px] font-semibold leading-[45px] text-[#091156] pt-[12px] -tracking-[0.2px] ">What our customer says</h1>
                    <p className="text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[23px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</p>
                </div>

                <img className="mx-auto pt-[65px]" src={img_team4} alt="abc"></img>

                <div className="flex max-w-[775px] mx-auto pt-[43px] justify-between">
                    <div className="pt-[18px]"><img className="max-w-[21.88px] h-[21.32px]" src={img_team5} alt="abc"></img></div>
                   
                    <p className="text-[14px] font-normal leading-[21px] tracking-[1.4px] text-[#8b8b8b] max-w-[555px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.</p>
                    <div className="pt-[20px]"><img className="max-w-[21.88px] h-[21.32px]" src={img_team6} alt="abc"></img></div>
                </div>

                <div className="flex max-w-[169px] mx-auto justify-between pt-[35px]">
                <img src={img_team7} alt="abc"></img>
                <img src={img_team8} alt="abc"></img>
                <img src={img_team9} alt="abc"></img>
                <img src={img_team10} alt="abc"></img>
                <img src={img_team11} alt="abc"></img>
                </div>

            </div>

            <Footer/>
        </div>
        </>
    )
}

export default Team;