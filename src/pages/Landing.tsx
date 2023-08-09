import BG from '../assets/bg/LandingBG2.jpg'
import RoundedButton from '../components/buttons/RoundedButton';
import Image from '../components/image/Image'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce'
import ValidationTooltip from '../components/tooltip/ValidationTooltip';
import DenCordLogo from '../components/icons/DenCordLogo';
import Header from '../components/ui/Header';
import Weird from '../lib/data/Weird.json'
import { getRandomGenerator } from '../lib/utils/randomGenerator';



export default function Landing(){
    const navigate = useNavigate()
    const [username, setUsername] = useState<string | null>('')
    const [isUsernameNull,setIsUsernameNull] = useState<boolean>(true)
    const [showTooltip, setShowTooltip] = useState<boolean>(false)
    const [dataName, setDataName] = useState<string | null>(null)

    useEffect(()=>{
        try{
            if(Weird.names){
                const randomName = getRandomGenerator(Weird.names)
                setDataName(randomName)
            }
        }
        catch(err){
            console.error('Error:', err)
        }
    }, [])
    
    
    const handleLogin = () =>{
        navigate('/login')
    }
    const handleGithub = () =>{
        window.open('https://github.com/christopher-alden/DenCord','_blank','noreferrer')
    }

    const handleUsernameChange = debounce((username:string)=>{
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
        if(username && !isUsernameNull){
            navigate(`/register?username=${encodeURIComponent(username)}`)
        }
        else{
            setShowTooltip(true)
        }
    }

    
    return(
        <>
            <Header>
                <DenCordLogo/>
                <div className='flex xl:gap-8 md:gap-4 font-light items-center justify-end'>
                    <RoundedButton handleEvent={handleGithub}>Github</RoundedButton>
                    {/* <RoundedButton>Learn More</RoundedButton> */}
                    <RoundedButton handleEvent={handleLogin} textClassName='text-white font-bold md:font-semibold' className='bg-accent md:px-8 px-4 py-2'>Log In</RoundedButton>
                </div>
            </Header>
            <div className='w-full h-full'>
                <div className='absolute w-full h-full flex flex-col'>
                    <div className='w-full h-[25vh] md:h-[20vh] bg-main z-10'></div>
                    <div className='w-full h-full bg-gradient-to-b from-main to-transparent z-10 '></div>
                    <Image attributes='absolute w-full h-full opacity-75 top-[18vh]' imgAttributes='object-left md:object-center' src={BG}/>
                </div>
                <div className='relative h-screen z-10 flex flex-col gap-6 ns:gap-10 justify-center items-center xl:items-center md:items-start xl:px-[10vw] px-[6vw] md:h-auto'>
                    <section className='flex w-fit md:mt-60'>
                        <span className=' text-gray-500 font-medium poppins leading-snug ns:text-4xl text-3xl text-center md:text-5xl md:text-left xl:text-center xl:text-6xl animate'>Chat. Chill. <span className="text-white">Connect.</span><br/>Hop on the call now.</span>
                    </section>
                    <section className='xl:w-[800px] md:w-[500px] z-10 flex flex-col'>
                        <form onSubmit={handleRegister} className=' w-full xl:h-16 h-12 flex bg-white justify-between rounded-lg '>
                            <input type='text' maxLength={25} placeholder={dataName!} onChange={(e)=>handleUsernameChange(e.target.value)} className=' h-full rounded-lg outline-none w-full bg-transparent text-main placeholder-light ns:text-base px-4 xl:px-8 text-sm placeholder:text-sm md:placeholder:text-base xl:placeholder:text-lg' spellCheck={false}></input>
                            <RoundedButton submit={true} textClassName='text-white text-base xl:text-xl text-white' className='bg-accent xl:px-8 xl:py-4 px-4 py-2'>Register Now</RoundedButton>
                        </form>
                        <div className={`${showTooltip ? 'visible' : 'hidden'} mt-6`}>
                            <ValidationTooltip color='bg-white' textColor='text-black' state={isUsernameNull}>calm the **** down, fill in ur username first buddy...</ValidationTooltip>
                        </div>
                    </section>
                </div>
            </div>
            
            <footer className='fixed bottom-0 w-full h-20 flex justify-center items-center'>
                <h1 className='font-bold uppercase poppins text-white text-2xl opacity-50'>christopheraldn</h1>
            </footer>
        </>
    );
}