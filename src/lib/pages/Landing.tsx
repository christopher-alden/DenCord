import BG from '../../assets/bg/LoginBG2.jpg'
import RoundedButton from '../components/buttons/RoundedButton';
import Image from '../components/image/Image'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce'
import ValidationTooltip from '../components/tooltip/ValidationTooltip';
import DenCordLogo from '../components/icons/DenCordLogo';
import Header from '../components/ui/Header';
import Hamburger from '../components/ui/Hamburger';
import WierdNames from '../data/WierdNames.json'


export default function Landing(){
    const navigate = useNavigate()
    const [username, setUsername] = useState<string | null>('')
    const [isUsernameNull,setIsUsernameNull] = useState<boolean>(true)
    const [showTooltip, setShowTooltip] = useState<boolean>(false)
    const [dataName, setDataName] = useState<string | null>(null)

    useEffect(()=>{
        try{
            if(WierdNames){
                const randomIdx:number = Math.floor(Math.random() * WierdNames.names.length)
                const randomName:string = WierdNames.names[randomIdx]
                if(randomName){
                    setDataName(randomName)
                }
                else{
                    setDataName("DefaultName101")
                }
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
                    <RoundedButton handleEvent={handleLogin} textColor='text-white' color='bg-accent' padding='md:px-8 px-4 py-2 '>Log In</RoundedButton>
                </div>
            </Header>
            <div className='w-full h-full'>
                <div className='absolute w-full h-full flex flex-col'>
                    <div className='w-full h-[25vh] md:h-[20vh] bg-main z-10'></div>
                    <div className='w-full h-full bg-gradient-to-b from-main to-transparent z-10 '></div>
                    <Image attributes='absolute w-full h-full opacity-75 top-[18vh]' imgAttributes='object-left md:object-center' src={BG}/>
                </div>
                <div className='relative h-screen z-10 flex flex-col gap-10 justify-center items-center xl:items-center md:items-start xl:px-[10vw] px-[6vw] md:h-auto'>
                    <section className='flex w-fit md:mt-60'>
                        <h1 className=' text-white font-medium poppins leading-snug  text-4xl text-center md:text-5xl md:text-left xl:text-center xl:text-6xl animate'>Chat. Chill. Connect.<br/>Hop on the call now.</h1>
                    </section>
                    <section className='xl:w-[800px] md:w-[500px] z-10 flex flex-col'>
                        <form onSubmit={handleRegister} className=' w-full xl:h-16 h-12 flex bg-white justify-between rounded-lg '>
                            <input type='text' maxLength={25} placeholder={dataName!} onChange={(e)=>handleUsernameChange(e.target.value)} className=' h-full rounded-lg outline-none w-full bg-transparent text-main placeholder-light text-lg px-4 xl:px-8 md:placeholder:text-base xl:placeholder:text-lg' spellCheck={false}></input>
                            <RoundedButton submit={true} textColor='text-white' color='bg-accent' size='xl:text-xl  md:text-md' font='font-semibold xl:font-bold' padding='xl:px-8 xl:py-4 px-4 py-2'>Register Now</RoundedButton>
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