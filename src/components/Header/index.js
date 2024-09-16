import { Link } from 'react-router-dom';
import logo from '../../assests/Header/Header_Logo.png';
import React from 'react';
function Header(){


    return(
        <>
            <header className='max-w-screen-2xl font-poppins flex justify-between mx-auto w-[79.8%] pt-[41px]'>
                <div className=''>
                    <img src={logo} alt="abc"></img>
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
                       <li className='pl-[8px] pt-[1px]'>
                       <Link className='py-3.5 px-10 bg-[#FF64AE] rounded-full text-white text-base tracking-[1.6px] font-semibold'>Contact</Link>
                       </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;