import { Link } from 'react-router-dom';
import logo from '../../assests/Header/Header_Logo.png';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import React, { useState } from 'react';
function Header() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(prevClick => !prevClick);


    return (
        <>
            <header className='max-w-screen-2xl font-poppins mx-auto
               
            '>
                <div className='max-w-[1188px] mx-auto flex pl-[20px] pr-[24px] justify-between pt-[41px]'>
                <div className=''>
                    <img className='max-lg:w-[100%]' src={logo} alt="abc"></img>
                </div>
                <div className={`pt-[17px]
                
                lg:static absolute lg:min-h-fit min-h-[350px] left-0 top-[15.9%] max-lg:justify-center max-lg:items-center max-lg:bg-[#E4E7FF]
                ${click ? 'block' : 'hidden'} lg:block` }>
                    <ul onClick={() => setClick(false)} className='flex gap-[45px]
                    max-xl:gap-[25px]
                    max-lg:gap-[18px]
                    max-md:none

                    lg:flex-row flex-col lg:items-center lg:gap-[45.2px] gap-8 max-lg:text-center

                   
                    

                    '>
                        {/* <li>
                       <Link to='/' className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] whitespace-nowrap'>Home +</Link>
                        
                       </li> */}

                        <li className='relative group max-lg:border-b max-lg:border-gray-300 max-lg:pb-2'>
                            <Link to='' className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] whitespace-nowrap
                            
                            max-lg:text-[14px]

                            max-lg:text-[#091156]
                            
                            '>
                                Home +
                            </Link>
                            <div className='absolute left-0 mt-2 w-[150px] bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            max-lg:text-[14px]

                            max-md:left-1/2
                            '>
                                <ul>
                                    <li>
                                        <Link to='/' className='block px-4 py-2 text-base text-[#8B8B8B] hover:bg-[#FF64AE] hover:text-white rounded-md
                                        max-lg:text-[14px]
                                        max-lg:text-[#091156]
                                        '>
                                            Home1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/home' className='block px-4 py-2 text-base text-[#8B8B8B] hover:bg-[#FF64AE] hover:text-white rounded-md
                                        max-lg:text-[14px]
                                        max-lg:text-[#091156]
                                        '>
                                            Home2
                                        </Link>
                                    </li>

                                    <li>
                                        <Link to='/team' className='block px-4 py-2 text-base text-[#8B8B8B] hover:bg-[#FF64AE] hover:text-white rounded-md
                                        max-lg:text-[14px]
                                        max-lg:text-[#091156]
                                        '>
                                            Team
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="max-lg:border-b max-lg:border-gray-300 max-lg:pb-2"><Link to='/about' className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] -ml-[6px]
                        max-lg:text-[14px]
                        max-lg:text-[#091156]
                        '>About</Link></li>
                        <li className="max-lg:border-b max-lg:border-gray-300 max-lg:pb-2"><Link to='/service' className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B]
                        max-lg:text-[14px]
                        max-lg:text-[#091156]
                        '>Service</Link></li>
                        <li className="max-lg:border-b max-lg:border-gray-300 max-lg:pb-2"><Link to='/gallery' className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B]
                        max-lg:text-[14px]
                        max-lg:text-[#091156]
                        '>Gallery</Link></li>
                        <li className="max-lg:border-b max-lg:border-gray-300 max-lg:pb-2"><Link to='/blog' className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B]
                        max-lg:text-[14px]
                        max-lg:text-[#091156]
                        '>Blog</Link></li>
                        <li className='pl-[8px] pt-[1px]'>
                            <Link to='/contact' className='py-3.5 px-10 bg-[#FF64AE] rounded-full text-white text-base tracking-[1.6px] font-semibold
                            max-lg:text-[14px]
                            '>Contact</Link>


                        </li>
                    </ul>
                </div>

                <div className='text-base mt-[5px] lg:hidden max-md:block ml-3 cursor-pointer max-md:pt-[13px]' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaAlignJustify />}
                </div>
                </div>
            </header>
        </>
    )
}

export default Header;