import BG from '../../assets/bg/LoginBG2.jpg'
import logo from '../../assets/DenCordLogo.png'
import RoundedButton from '../components/buttons/RoundedButton';
import Image from '../components/image/Image'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import debounce from 'lodash.debounce'
import ValidationTooltip from '../components/tooltip/ValidationTooltip';


export default function Landing(){
    const navigate = useNavigate()
    const [username, setUsername] = useState<string | null>('')
    const [isUsernameNull,setIsUsernameNull] = useState<boolean>(true)
    const [showTooltip, setShowTooltip] = useState<boolean>(false)
    
    const handleLogin = () =>{
        navigate('/login')
    }

    const handleUsernameChange = debounce((username:string)=>{
        console.log("test")
        const trimmedUsername = username?.trim()
        if(trimmedUsername && !/^\s*$/.test(trimmedUsername)){
            setIsUsernameNull(false)
        }
        else{
            setIsUsernameNull(true)
        }
        setUsername(username)
    }, 300)

    const handleRegister = (e:any) =>{
        e.preventDefault()
        console.log(username)
        if(username && !isUsernameNull){
            navigate(`/register?username=${encodeURIComponent(username)}`)
        }
        else{
            setShowTooltip(true)
        }
    }

    return(
        <>
            <div className='w-screen h-screen'>
                <div className='absolute w-full h-full flex flex-col overflow-hidden'>
                    <div className='w-full h-[20vw] bg-main z-10'></div>
                    <div className='w-full h-full bg-gradient-to-b from-main to bg-transparent z-10'></div>
                    <Image attributes='absolute w-full h-screen opacity-75 top-[20vh]' src={BG}/>
                </div>
                <nav className='flex justify-between px-[10vw] items-center absolute z-20 w-full h-40 text-white text-md '>
                    <RoundedButton hover={false}>
                        <div className='flex justify-center items-center gap-2'>
                            <img src={logo} alt="" className='w-5 h-5' />
                            <h1 className='text-xl uppercase font-bold'>DenCord</h1>
                        </div>
                    </RoundedButton>
                    <div className='flex justify-evenly font-light w-[25vw] '>
                        <RoundedButton>Github</RoundedButton>
                        <RoundedButton>Learn More</RoundedButton>
                        <RoundedButton handleEvent={handleLogin} textColor='text-white' color='bg-accent' padding='px-8 py-2'>Log In</RoundedButton>
                    </div>
                </nav>
                <div className='relative z-10 flex flex-col gap-10'>
                    <section className='flex justify-center w-full mt-60'>
                        <h1 className='text-6xl text-white font-medium text-center poppins leading-snug'>Sit back, relax, and connect<br/>with your loved ones</h1>
                    </section>
                    <section className='w-1/2 z-10 justify-between items-center m-auto flex flex-col'>
                        <form onSubmit={handleRegister} className='w-full h-20 flex bg-white   rounded-lg px-8 py-2'>
                            <input type='text' maxLength={25} placeholder='Dont miss out on the fun, Join now!' onChange={(e)=>handleUsernameChange(e.target.value)} className='h-full rounded-lg outline-none w-3/4 bg-transparent text-main placeholder-main text-lg'></input>
                            <RoundedButton submit={true} textColor='text-white' color='bg-accent' size='xl' font='font-bold' padding='px-8 py-4'>Register Now</RoundedButton>
                        </form>
                        <div className={`${showTooltip ? 'visible' : 'hidden'} mt-6`}>
                            <ValidationTooltip color='bg-white' textColor='text-black' state={isUsernameNull}>calm the **** down, fill in ur username first buddy...</ValidationTooltip>
                        </div>
                    </section>
                </div>
            </div>
            <footer className='absolute bottom-0 w-full h-20 flex justify-center items-center'>
                <h1 className='font-bold uppercase poppins text-white text-2xl opacity-50'>christopheraldn</h1>
            </footer>
        </>
    );
}