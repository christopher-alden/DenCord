import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import RoundedButton from "../components/buttons/RoundedButton";
import DenCordLogo from "../components/icons/DenCordLogo";
import Header from "../components/ui/Header";
import Loader from "../components/loader/Loader";
import Image from "../components/image/Image";
import LoginBG from "../../assets/bg/LoginBG.png"

const Login = () =>{
    const navigate = useNavigate()
    const [error, setError] = useState<boolean>(false);

    const handleLogin = async (e:any) =>{
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value

        try{
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        }
        catch (err){

        }
    }
    return(
        <div className="h-screen w-screen bg-gradient-to-tr from-black to-sub">
            <Header>
                <DenCordLogo/>
                <div className='flex xl:gap-8 md:gap-4 font-light items-center justify-end'>
                    <RoundedButton handleEvent={()=>navigate('/register')} textColor='text-white' color='bg-transparent border-[1px] border-light border-solid' padding='md:px-8 px-4 py-2' font='font-bold md:font-semibold'>Register</RoundedButton>
                </div>
            </Header>
            {/* <Image attributes="absolute w-screen h-screen z-0" imgAttributes="opacity-10 object-center" src={LoginBG}></Image> */}
            <div className="relative w-full h-full flex justify-center items-center flex-col gap-6 md:gap-10 py-40 px-[6vw] z-10">
                <div className="flex flex-col items-center">
                    <h1 className="text-white capitalize font-bold poppins text-3xl md:text-4xl text-center leading-snug">Welcome back!</h1>
                    <p className=" text-light text-sm md:text-base">where have you been??? we missed you!</p>
                </div>
                <section>
                    <form onSubmit={handleLogin} className="flex flex-col gap-2 md:gap-4 md:min-w-[480px] min-w-[320px]">
                        <label className="flex flex-col gap-2">
                            <p className="text-white  text-sm">Email</p> 
                            <input spellCheck={false} type="text" className="border-[1px] focus:ring-0 focus:outline-none focus:border-accent text-white px-4 py-2 bg-transparent rounded-lg " ></input>
                        </label>
                        <label className="flex flex-col gap-2">
                            <p className="text-white  text-sm">Password</p> 
                            <input spellCheck={false} type="text" className="border-[1px] focus:ring-0 focus:outline-none focus:border-accent text-white px-4 py-2 bg-transparent rounded-lg " ></input>
                        </label>
                        <div className="flex items-center text-white">
                                <div className="w-1/2 h-[1px] bg-light"/> <p className="text-center px-4">Or</p> <div/><div className="w-1/2 h-[1px] bg-light"/>
                            </div>
                            <RoundedButton color="bg-white" textColor="text-black">
                                <div className="flex gap-2 justify-center">
                                    <img className="w-6" src="https://img.icons8.com/windows/32/google-logo.png" alt="google-logo"/>
                                    <h1>Continue with Google</h1>
                                </div>
                            </RoundedButton>
                        <RoundedButton submit={true} padding="px-4 py-2 mt-8" font="font-bold" color="bg-accent">Log In</RoundedButton>
                        <span className="text-light text-xs md:text-base">You fr don't have an account? <a className="text-xs md:text-base text-blue-500" href="/register">Register Here</a></span>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Login