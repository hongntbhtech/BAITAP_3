import { useState } from 'react';
import img_email from '../../assests/Login_Logout/email.png';
import img_psw from '../../assests/Login_Logout/padlock.png';
import img_user from '../../assests/Login_Logout/user.png';

function Login() {
    const [action, setAction] = useState('Sign Up');

    const handleClick = (newAction) => {
        setAction(newAction);
    };

    return (
        <div className='flex flex-col mx-auto mt-[200px] pb-[30px] bg-gradient-to-r from-blue-400 to-green-400 w-[600px]'>
            <div className='flex flex-col items-center gap-[9px] w-full mt-[30px]'>
                <div className='text-[#3c009d] text-[48px] font-bold'>{action}</div>
                <div className='w-[61px] h-[6px] bg-[#3c009d] rounded-[9px]'></div>
            </div>
            <div className='mt-[55px] flex flex-col gap-[25px]'>
                <div className='flex items-center mx-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]'>
                    <img className='my-0 mx-[30px]' src={img_user} alt='User' />
                    <input className='h-[50px] w-[400px] bg-transparent border-0 outline-none text-[#797979] text-[19px]' placeholder='Name' type='text' />
                </div>

                <div className='flex items-center mx-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]'>
                    <img className='my-0 mx-[30px]' src={img_email} alt='Email' />
                    <input className='h-[50px] w-[400px] bg-transparent border-0 outline-none text-[#797979] text-[19px]' placeholder='Email' type='email' />
                </div>

                <div className='flex items-center mx-auto w-[480px] h-[80px] bg-[#eaeaea] rounded-[6px]'>
                    <img className='my-0 mx-[30px]' src={img_psw} alt='Password' />
                    <input className='h-[50px] w-[400px] bg-transparent border-0 outline-none text-[#797979] text-[19px]' placeholder='Password' type='password' />
                </div>
            </div>
            <div className='pl-[69px] mt-[27px] text-[#797979] text-[18px]'>
                Loss password? <span className='text-[#4c00b4] cursor-pointer'>Click here!</span>
            </div>
            <div className='flex gap-[30px] my-[60px] mx-auto'>
                <div
                    onClick={() => handleClick('Sign Up')}
                    className={`flex justify-center items-center w-[220px] h-[59px] text-white 
                    ${action === 'Sign Up' ? 'bg-gray-500' : 'bg-[#4c00b4]'} 
                    rounded-full text-[19px] font-bold cursor-pointer`}
                >
                    Sign Up
                </div>
                <div
                    onClick={() => handleClick('Login')}
                    className={`flex justify-center items-center w-[220px] h-[59px] text-white 
                    ${action === 'Login' ? 'bg-gray-500' : 'bg-[#4c00b4]'} 
                    rounded-full text-[19px] font-bold cursor-pointer`}
                >
                    Login
                </div>
            </div>
        </div>
    );
}

export default Login;
