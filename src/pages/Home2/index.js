import Footer from "../../components/Footer";
import { Link } from 'react-router-dom';
import logo from '../../assests/Header/Logo_Home2.png';
import background from '../../assests/Slider/background_slider.png';

import play_button from '../../assests/Slider/play_button.png';

import img_about from '../../assests/About/Illustration-1.png';

import icon_2 from '../../assests/Service/icon-2.png';
import icon_2_1 from '../../assests/Service/icon-2_1.png';
import icon_2_2 from '../../assests/Service/icon-2_3.png';

import { ServiveBoxMain, ImgBox, Heading, Paragraph, Paragraph1, BlogBoxMain,ImgBoxBlog, HeadingBlog,ParagraphBlog,Button} from './Home2Styled'

import bg_choose from '../../assests/Choose/Background_Choose.png'
import choose1 from '../../assests/Choose/handshake_1.png'
import choose2 from '../../assests/Choose/brotherhood_1.png'
import choose3 from '../../assests/Choose/earth_1.png'
import choose4 from '../../assests/Choose/doctor_1.png'


import img_blog_2 from '../../assests/Blog/unsplash_0_McYfdyEDA.png'
import img_blog from '../../assests/Blog/unsplash_3ewkNkfJj2k.png'
import img_blog_1 from '../../assests/Blog/unsplash_7tDGb3HrITg.png'

import "./Home2.css";

import img_service from '../../assests/Service/Vector.png'



function Home2() {

    return (
        <>
            <div className='max-w-screen-2xl font-poppins'>

                <div className='h-[918px]' style={{ backgroundImage: `url(${background})` }}>
                    <header className='flex justify-between mx-auto w-[79.8%] pt-[41px]'>
                        <div className=''>
                            <img className='pl-[5px]' src={logo} alt="abc"></img>
                        </div>
                        <div className='w-[60.5%] pt-[17px]'>
                            <ul className='flex gap-[45px]'>
                                <li>
                                    <Link to='/' className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] whitespace-nowrap'>Home +</Link>

                                </li>
                                <li><Link className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] -ml-[6px]'>About</Link></li>
                                <li><Link className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B]'>Service</Link></li>
                                <li><Link className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B]'>Gallery</Link></li>
                                <li><Link className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B]'>Blog</Link></li>
                                <li className='pl-[8px]'>
                                    <Link className='py-3.5 px-10 bg-[#FF64AE] rounded-full text-white text-base tracking-[1.6px] font-semibold'>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </header>

                    <div className=" flex w-[79.2%] mx-auto pt-[204px] justify-between">
                        <div className=''>
                            <h1 className='font-semibold text-[48px] leading-[60px] text-[#ffffff] -tracking-[0.4px] max-w-[502px]'>Your beauty center place</h1>
                            <p className='max-w-[501px] font-medium text-[16px] leading-[24px] tracking-[1.7px] text-[#D8DCFF] pt-[11px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.</p>

                            <div className='pt-[41px]'>
                                <button className='w-[36%] h-[52px] font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-[#ffffff] border-[1px] border-[#FFFFFF] rounded-[15px]'>More Details</button>
                            </div>

                        </div>

                        <div className='flex  mx-auto items-center pl-[54px]'>
                            <div>
                                <img src={play_button} alt='abc'></img>
                            </div>

                            <div className='pl-[27px]'>
                                <h4 className='font-semibold leading-[24px] text-[16px] text-[#ffffff] tracking-[1.6px]'>Tour Video</h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex mx-auto w-[79.2%] justify-between pt-[159px]'>
                    <div>
                        <img src={img_about} alt="abc"></img>
                    </div>

                    <div className='w-[42.4%]'>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]'>About Us</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[11px] -tracking-[0.1px]'>We are the best beauty clinic</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[11px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.</p>
                        
                        <div className='pt-[48px] '>
                            <div className='about-btn-learnmore'>
                                <button className='w-[42%] h-[57px] rounded-[50px] bg-[#FF64AE] border-0 text-[16px] text-[#ffffff] tracking-[1.7px] font-medium font-poppins pl-[2px]
                            
                            '>Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-[160px] pb-[127px]'>
                    <div className='max-w-[1178px] m-0 m-auto text-center'>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]'>Main Services</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] max-w-[450px] m-0 m-auto pt-[12px]'>Our focus services</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[20px]'>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className='flex justify-between max-w-[915px] m-0 m-auto pt-[77px]'>
                        <ServiveBoxMain className='' >
                            <ImgBox src={icon_2} alt='abc'></ImgBox>
                            <Heading>Beauty consultation</Heading>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing.</Paragraph>
                            <Paragraph1>Learn more</Paragraph1>
                        </ServiveBoxMain>

                        <ServiveBoxMain className=''>
                            <ImgBox src={icon_2_1} alt='abc'></ImgBox>
                            <Heading>Skin treatments</Heading>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing.</Paragraph>
                            <Paragraph1>Learn more</Paragraph1>
                        </ServiveBoxMain>

                        <ServiveBoxMain className=''>
                            <ImgBox src={icon_2_2} alt='abc'></ImgBox>
                            <Heading>Beauty product</Heading>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing.</Paragraph>
                            <Paragraph1>Learn more </Paragraph1>
                        </ServiveBoxMain>
                    </div>
                </div>


                <div className='h-[697.5px]' style={{ backgroundImage: `url(${bg_choose})` }}>

                    <div className=' flex pt-[290px] w-[78.6%] mx-auto justify-between'>
                    <div className='max-w-[486px]'>
                        <h1 className='font-semibold text-[36px] leading-[45px] text-[#ffffff] -tracking-[0.2px]'>Why choosing us?</h1>
                        <p className='font-normal text-[16px] leading-[24px] tracking-[1.6px] text-[#D8DCFF] pt-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.</p>
                    </div>

                    <div className='min-w-[507px] -mt-[13px]'>
                        <div className='flex'>
                        <div className='flex max-w-[197px]'>
                            <img className='max-w-[64px] max-h-[64px]' src={choose1} alt='abc'></img>
                            <div className='pl-[10px]'>
                                <p className='font-semibold text-[36px] leading-[45px] text-[#ffffff]'>100%</p>
                                <p className='font-normal text-[16px] leading-[20px] text-[#ffffff] tracking-[0.4px] -mt-[3px]'>trusted clinic</p>
                            </div>
                        </div>

                        <div className='flex pl-[88px] -mt-[5px]'>
                            <img className='max-w-[64px] max-h-[64px]' src={choose2} alt='abc'></img>
                            <div>
                                <p className='font-semibold text-[36px] leading-[45px] text-[#ffffff] pt-[2px] pl-[10px]'>99%</p>
                                <p className='font-normal text-[16px] leading-[20px] text-[#ffffff] -mt-[3px] pl-[11px]'>customer love</p>
                            </div>
                        </div>
                        </div>

                        <div className='flex  pt-[43px]'>
                        <div className='flex max-w-[197px]'>
                            <img className='max-w-[64px] max-h-[64px]' src={choose3} alt='abc'></img>
                            <div>
                                <p className='font-semibold text-[36px] leading-[45px] text-[#ffffff] pt-[5px] pl-[10px]'>75+</p>
                                <p className='font-normal text-[16px] leading-[20px] text-[#ffffff] -mt-[4px] pl-[12px]'>asian branch</p>
                            </div>
                        </div>

                        <div className='flex pl-[88px] '>
                            <img className='max-w-[64px] max-h-[64px]' src={choose4} alt='abc'></img>
                            <div>
                                <p className='font-semibold text-[36px] leading-[45px] text-[#ffffff] pt-[5px] pl-[10px]'>1.200+</p>
                                <p className='font-normal text-[16px] leading-[20px] text-[#ffffff] -mt-[4px] pl-[11px]'>licensed worker</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                

                <div>
                        <div className='max-w-[848px] text-center m-0 m-auto pt-[110px]'>
                            <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae]'>The Blog</h4>
                            <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[13px]'>Our latest news</h1>
                            <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] pt-[18px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        <div className='flex justify-between max-w-[1139px] m-0 m-auto pt-[87px] '>
                            <BlogBoxMain>
                                <ImgBoxBlog src={img_blog} alt='abc'></ImgBoxBlog>
                                <HeadingBlog>How much does a consultation cost at our clinic?</HeadingBlog>
                                <ParagraphBlog>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</ParagraphBlog>
                                <Button>Learn more</Button>
                            </BlogBoxMain>

                            <BlogBoxMain>
                                <ImgBoxBlog src={img_blog_1} alt='abc'></ImgBoxBlog>
                                <HeadingBlog>Watch out! don't choose the wrong beauty product</HeadingBlog>
                                <ParagraphBlog>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</ParagraphBlog>
                                <Button>Learn more</Button>
                            </BlogBoxMain>

                            <BlogBoxMain>
                                <ImgBoxBlog src={img_blog_2} alt='abc'></ImgBoxBlog>
                                <HeadingBlog>About skin care you need to know</HeadingBlog>
                                <ParagraphBlog>A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...</ParagraphBlog>
                                <Button>Learn more</Button>
                            </BlogBoxMain>
                        </div>
                </div>

                <div className='flex justify-between w-[79.2%] mx-auto pt-[169px] pb-[60px]'>
                    <div className='max-w-[391px]'>
                        <h1 className='font-semibold text-[36px] leading-[45px] text-[#091156] -tracking-[0.2px]'>Request call services</h1>
                        <p className='font-normal text-[16px] leading-[24px] tracking-[1.6px] pt-[17px]'>Lorem ipsum dolor sit amet, consect adipiscing elit <span className='font-semibold text-[16px] leading-[24px] tracking-[1.6px] '> Contact Us.</span></p>
                    </div>

                    <form className='pt-[14px]'>
                        <div className='relative'>

                            
                        <input className=' w-[658px] h-[73px] rounded-[25px] border-[1px] border-[#D9DDFE] pl-[37px]' type='number' placeholder='Insert your phone number here ...'></input>

                        
                                <div className='top-0 right-0 absolute w-[113px] h-[73px] bg-[#FF64AE] rounded-r-[25px] '>
                                        <img className='m-0 m-auto pt-[18px]' src={img_service} alt='abc'>
                                        
                                        </img>
                                </div>
                            </div>
                       
                        
                        <p className='font-normal text-[12px] leading-[18px] tracking-[1.2px] text-[#8B8B8B] italic text-end pt-[8px]'>Toll free for our coverage areas.</p>
                    </form>
                </div>

                <Footer/>

            </div>

         

        </>
    )
}

export default Home2;