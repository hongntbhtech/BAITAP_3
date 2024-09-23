import Header from "../../components/Header";
import img_service1 from "../../assests/Service/unsplash_5TJ0Hoy5FLY.png"
import img_service2 from "../../assests/Service/unsplash_ZOT2Mewzmh8.png"
import img_service3 from "../../assests/Service/unsplash_gzfIO69Q6eM.png"
import img_service4 from "../../assests/Service/unsplash_pTrhfmj2jDA.png"

import img_service5 from "../../assests/Service/Animation1_1.png"
import img_service6 from "../../assests/Service/Animation2_2.png"
import img_service7 from "../../assests/Service/Animation3_3.png"

import bg_service1 from "../../assests/Service/unsplash_NPjNtTExSJ4.png"

import play_button from "../../assests/Slider/play_button.png"

import Footer from "../../components/Footer";
function Service(){
    return(
        <>
                <div className="">
                <div className="max-w-screen-2xl font-poppins mx-auto">
                <Header/>
                </div>
                <div className="max-w-[1100px] mx-auto pt-[118px]
                 max-lg:pl-[30px] max-lg:pr-[30px]
                ">
                    <div className="text-center">
                        <h4 className="font-semibold text-[16px] text-[#FF64AE] leading-[20px] max-md:text-[14px]">Our Services</h4>
                        <h1 className="font-semibold text-[36px] text-[#091156] leading-[45px] pt-[11px] -tracking-[0.1px]  max-md:text-[33px]">We focus on your beauty</h1>
                        <p className="font-normal text-[16px] text-[#8B8B8B] leading-[24px] tracking-[1.6px] pt-[24px]  max-md:text-[14px]">Lorem ipsum dolor sit amet</p>
                    </div>

                    <div className="flex justify-between pt-[74px]
                     max-lg:flex-col max-lg:items-center
                    ">
                        <img src={img_service1} alt="abc"></img>
                        <img className="max-lg:pt-[20px]" src={img_service2} alt="abc"></img> 
                    </div>

                    <div className="flex justify-between pt-[68px]
                     max-lg:flex-col max-lg:items-center
                    ">
                        <img src={img_service3} alt="abc"></img>
                        <img className="max-lg:pt-[20px]" src={img_service4} alt="abc"></img> 
                    </div>
                </div>

                <div className='flex mx-auto max-w-[1137px] justify-between pt-[141px]
                max-lg:flex-col max-lg:items-center
                 max-lg:pl-[30px] max-lg:pr-[30px]
                '>
                    <div className="">
                        <img className="" src={img_service5} alt="abc"></img>
                    </div>

                    <div className='max-w-[475px] pt-[29px]
                     max-lg:w-full max-lg:text-center max-lg:pt-[30px]
                    '>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] -tracking-[0.1px]'>Beauty Consultation</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[13px] -tracking-[0.3px] '>We services beauty consultation</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[12px] max-lg:max-w-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
                        <div className="flex">
                        <p className="text-[16px] font-semibold leading-[24px] tracking-[1.5px] text-[#091156] max-w-[480px] pt-[25px] max-lg:max-w-none"> Make an Appointment</p>
                        <span className="text-[30px] text-[#FF64AE] pl-[10px] pt-[13px] font-semibold -tracking-[4px]">{'>>'}</span>
                        </div>
                        
                    </div>
                </div>

                <div className='flex mx-auto max-w-[1137px] justify-between pt-[92px]
                 max-lg:flex-col max-lg:items-center
                 max-lg:pl-[30px] max-lg:pr-[30px]
                '>
                    <div className='max-w-[475px] pt-[29px]
                     max-lg:w-full max-lg:text-center max-lg:pt-[30px]
                    '>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] -tracking-[0.1px]'>Skin Treatements</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[13px] -tracking-[0.3px] max-w-[411px] '>Skin care and treatment by expert</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[12px] max-lg:max-w-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
                        <div className="flex">
                        <p className="text-[16px] font-semibold leading-[24px] tracking-[1.5px] text-[#091156] max-w-[480px] pt-[25px] max-lg:max-w-none"> Make an Appointment</p>
                        <span className="text-[30px] text-[#FF64AE] pl-[10px] pt-[13px] font-semibold -tracking-[4px]">{'>>'}</span>
                        </div>
                        
                    </div>

                    <div className="">
                        <img className="" src={img_service6} alt="abc"></img>
                    </div>
                </div>

                <div className='flex mx-auto max-w-[1137px] justify-between pt-[92px] pb-[130px]
                 max-lg:flex-col max-lg:items-center
                 max-lg:pl-[30px] max-lg:pr-[30px]
                '>
                    <div className="">
                        <img className="" src={img_service7} alt="abc"></img>
                    </div>

                    <div className='max-w-[475px] pt-[29px]
                     max-lg:w-full max-lg:text-center max-lg:pt-[30px]
                    '>
                        <h4 className='text-[16px] font-semibold leading-[20px] text-[#ff64ae] -tracking-[0.1px]'>Beauty Product</h4>
                        <h1 className='text-[36px] font-semibold leading-[45px] text-[#091156] pt-[13px] -tracking-[0.3px] '>We present quality beauty products</h1>
                        <p className='text-[16px] font-normal leading-[24px] tracking-[1.6px] text-[#8b8b8b] max-w-[480px] pt-[12px] max-lg:max-w-none'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero.</p>
                        <div className="flex">
                        <p className="text-[16px] font-semibold leading-[24px] tracking-[1.5px] text-[#091156] max-w-[480px] pt-[25px] max-lg:max-w-none"> Make an Appointment</p>
                        <span className="text-[30px] text-[#FF64AE] pl-[10px] pt-[13px] font-semibold -tracking-[4px]">{'>>'}</span>
                        </div>
                        
                    </div>
                </div>

                <div className='h-[529px] bg-no-repeat 2xl:bg-cover' style={{ backgroundImage: `url(${bg_service1})` }}>
                    <div className="max-w-[1140px] mx-auto flex justify-between pt-[183px]
                     max-lg:flex-col max-lg:items-center
                 max-lg:pl-[30px] max-lg:pr-[30px] 
                 max-lg:pt-[150px]
                 max-ssm:pt-[10px]
                    ">
                        <div className="max-w-[732px]
                         max-lg:w-full max-lg:text-center max-lg:mx-auto
                        ">
                            <h1 className="font-semibold text-[36px] leading-[45px] text-[#ffffff] max-w-[570px] -tracking-[0.3px]  max-md:text-[33px] max-lg:max-w-none">Best responsibility and service for our customers</h1>
                            <p className="font-normal text-[16px] leading-[24px] text-[#CACACA] tracking-[1.6px] max-w-[570px] pt-[18px]  max-md:text-[14px] max-lg:max-w-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
                        </div>

                        <div className="flex max-w-[500px] pr-[58px] justify-between
                        max-lg:flex-col max-lg:items-center max-lg:pr-0
                        ">
                            <img className="max-lg:w-full" src={play_button} alt="abc"></img>
                            <p className="ml-[9px] font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-[#ffffff] pt-[66px]
                            max-lg:pt-[4px]
                            ">Treatments Videos</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[972px] mx-auto pt-[117px] pb-[31px]
            
                ">
                    <div className="text-center items-center">
                        <div className="pb-[15px]">
                        <h1 className="font-semibold text-[36px] leading-[45px] text-[#091156] max-w-[640px] mx-auto pl-[13px] -tracking-[0.3px]">Services FAQ’s</h1>
                        </div>
                        <div className="w-[40px] h-[5px] bg-[#FF64AE] rounded-[5px] m-0 m-auto "></div>
                    </div>

                    <div className="pt-[68px] flex justify-between max-w-[972px] pb-[12px]">
                        <div className="font-semibold text-[16px] leading-[24px] tracking-[1.5px] text-[#091156] pl-[34px] ">Is beauty consultation handled thoroughly? </div>
                        <span className="text-[18px] text-[#091156] pl-[10px] pt-[0px] font-semibold pr-[25px]">{'^'}</span>

                    </div>

                    <div className="w-[100%] h-[1px] bg-[#091156]  max-lg:pl-[30px] max-lg:pr-[30px]">

                    </div>

                     <div className="max-w-[821px] mx-auto pt-[52px]
                      max-lg:pl-[30px] max-lg:pr-[30px]
                     ">
                            <p className="font-normal italic text-[14px] leading-[21px] tracking-[1.45px] text-[#8B8B8B]">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>
                            <p className="font-normal italic text-[14px] leading-[21px] tracking-[1.45px] text-[#8B8B8B] pt-[21px]">porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                        </div>

                   <div className="pt-[87px] flex justify-between max-w-[972px] pb-[12px]">
                   <div className="font-semibold text-[16px] leading-[24px] tracking-[1.6px] text-[#091156] pl-[34px]">Can I be beautiful in an instant time? </div>
                    <span className="text-[18px] text-[#091156] pl-[10px] pt-[0px] font-semibold pr-[25px]">{'v'}</span>
                   </div>

                   <div className="pt-[16px] flex justify-between max-w-[972px] pb-[12px]">
                   <div className="font-semibold text-[16px] leading-[24px] tracking-[1.55px] text-[#091156] pl-[34px]">Are there any side effects to the treatment methods or treatments at this clinic? </div>
                    <span className="text-[18px] text-[#091156] pl-[10px] pt-[0px] font-semibold pr-[25px]">{'v'}</span>
                   </div>

                   <div className="pt-[16px] flex justify-between max-w-[972px] pb-[12px]">
                   <div className="font-semibold text-[16px] leading-[24px] tracking-[1.55px] text-[#091156] pl-[34px]">Do professionals have accreditation in their respective fields? </div>
                    <span className="text-[18px] text-[#091156] pl-[10px] pt-[0px] font-semibold pr-[25px]">{'v'}</span>
                   </div>

                </div>

              
                </div>

                <Footer/>
        </>
    )
}

export default Service;