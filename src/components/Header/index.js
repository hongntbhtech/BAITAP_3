import { Link } from 'react-router-dom';
import logo from '../../assests/Header/Header_Logo.png';
import { FaAlignJustify, FaTimes } from 'react-icons/fa';
import React, { useState, useEffect, useRef } from 'react';
import { Avatar, Typography } from "@material-tailwind/react";


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const [user, setUser] = useState({
        username: "",
        name: ""
    });

    const handleClick = () => setMenuOpen(prevMenuOpen => !prevMenuOpen);

    const handleOutsideClick = (event) => {
        if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
        if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick); //??
        };
    }, [menuOpen, isOpen]);

    const toggleMenu = (event) => {
        event.stopPropagation(); // Ngăn chặn sự kiện truyền lên các phần tử cha
        setIsOpen(prev => !prev);
    };


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('users'));
        if (items) {
            setUser(items);
        }
    }, []);

    console.log(user);

    return (
        <>
            <header className='max-w-screen-2xl font-poppins mx-auto'>
                <div className='max-w-[1188px] mx-auto flex pl-[20px] pr-[24px] justify-between pt-[41px]'>
                    <div>
                        <img className='max-lg:w-[100%]' src={logo} alt="abc" />
                    </div>
                    <div ref={menuRef} className={`pt-[17px] absolute max-lg:left-0 max-lg:w-full max-lg:bg-gray-100 max-lg:shadow-lg max-lg:transition-all max-lg:duration-300 ${menuOpen ? 'top-[0px]' : '-top-[600px]'} lg:static`}>
                        <ul onClick={() => setMenuOpen(false)} className='flex gap-[45px] max-lg:flex-col max-lg:w-[100%]'>
                            <li className='max-lg:w-[100%] max-lg:text-center max-lg:pt-[50px] group relative flex justify-center max-lg:max-h-[300px] max-lg:border-b max-lg:border-gray-300 max-lg:pb-2'>
                                <button onClick={toggleMenu} className='no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] whitespace-nowrap cursor-pointer'>
                                    Home +
                                </button>
                                <div className={`absolute left-1/2 max-lg:left-2/3 transform -translate-x-1/2 mt-2 w-[150px] bg-white rounded-md shadow-lg transition-opacity duration-300 ${isOpen ? 'block' : 'hidden'} max-lg:z-10`}>
                                    <ul>
                                        <li>
                                            <Link to='/homemain' className='block px-4 py-2 text-base text-[#8B8B8B] hover:bg-[#FF64AE] hover:text-white rounded-md'>
                                                Home1
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/home' className='block px-4 py-2 text-base text-[#8B8B8B] hover:bg-[#FF64AE] hover:text-white rounded-md'>
                                                Home2
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/team' className='block px-4 py-2 text-base text-[#8B8B8B] hover:bg-[#FF64AE] hover:text-white rounded-md'>
                                                Team
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>


                            <li className="max-lg:w-[100%] max-lg:text-center max-lg:border-b max-lg:border-gray-300 max-lg:pb-2">
                                <Link to='/about' className='max-lg:my-1 max-lg:mx-2 no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B] -ml-[6px]'>About</Link>
                            </li>
                            <li className="max-lg:w-[100%] max-lg:text-center max-lg:border-b max-lg:border-gray-300 max-lg:pb-2">
                                <Link to='/service' className='max-lg:my-1 max-lg:mx-2 no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B]'>Service</Link>
                            </li>
                            <li className="max-lg:w-[100%] max-lg:text-center max-lg:border-b max-lg:border-gray-300 max-lg:pb-2">
                                <Link to='/gallery' className='max-lg:my-1 max-lg:mx-2 no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B]'>Gallery</Link>
                            </li>
                            <li className="max-lg:w-[100%] max-lg:text-center max-lg:border-b max-lg:border-gray-300 max-lg:pb-2">
                                <Link to='/blog' className='max-lg:my-1 max-lg:mx-2 no-underline text-base font-medium leading-[24px] tracking-[1.6px] text-[#8B8B8B]'>Blog</Link>
                            </li>
                            <li className='pl-[8px] pt-[1px] max-lg:w-[100%] max-lg:text-center max-lg:pb-[50px] max-lg:border-b max-lg:border-gray-300 max-lg:pb-2'>
                                <Link to='/contact' className='py-3.5 px-10 bg-[#FF64AE] rounded-full text-white text-base tracking-[1.6px] font-semibold'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='text-[25px] lg:hidden cursor-pointer pt-[18px]' onClick={handleClick}>
                        {menuOpen ? <FaTimes /> : <FaAlignJustify />}
                    </div>

                    <div>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd" />
                        </svg>
                        <div className="flex items-center gap-4">
                            {user &&
                                <>
                                    <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
                                    <div>
                                        <Typography variant="h6">{user.username}</Typography>
                                        <Typography variant="small" color="gray" className="font-normal">
                                             {user.name}
                                        </Typography>
                                    </div>
                                </>}
                        </div>

                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;

