import DenCordLogo from "../components/icons/DenCordLogo"
import Header from "../components/ui/Header"
import RoundedButton from "../components/buttons/RoundedButton"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from 'react'


const Register = () =>{
    const navigate = useNavigate()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const filledUsername = searchParams.get('username') || ''

    const [username , setUsername] = useState<string>(filledUsername);
    const changeField = (value:string) =>{
        setUsername(value)
    }

    const handleRegister = (e:any) =>{
        e.preventDefault()
        console.log(e.target[0].value, e.target[1].value, e.target[2].value)
    }
    return(
        <div className="h-screen w-screen bg-gradient-to-r from-main to-sub">
            <Header>
                <DenCordLogo/>
                <div className='flex xl:gap-8 md:gap-4 font-light items-center justify-end'>
                    <RoundedButton handleEvent={()=>navigate('/login')} textColor='text-white' color='bg-transparent border-[1px] border-light border-solid' padding='md:px-8 px-4 py-2'>Log in</RoundedButton>
                </div>
            </Header>
            <div className="w-full h-full flex flex-col justify-center items-center gap-10">
                <h1 className="text-white capitalize font-bold poppins text-4xl text-center leading-snug">Create your<br/>Dencord account</h1>
               <section>
                    <form onSubmit={handleRegister} className="flex flex-col gap-4">
                        <label className="flex flex-col gap-2">
                            <p className="text-white  text-sm">Username</p> 
                            <input spellCheck={false} type="text" className="border-[1px] focus:ring-0 focus:outline-none focus:border-accent text-white px-4 py-2 bg-transparent rounded-lg w-96" onChange={(e)=>{changeField(e.target.value)}} value={username}></input>
                        </label>
                        <label className="flex flex-col gap-2">
                            <p className="text-white  text-sm">Email</p> 
                            <input spellCheck={false} type="text" className="border-[1px] focus:ring-0 focus:outline-none focus:border-accent text-white px-4 py-2 bg-transparent rounded-lg w-96"></input>
                        </label>
                        <label className="flex flex-col gap-2">
                            <p className="text-white  text-sm">Password</p> 
                            <input spellCheck={false} type="password" className="border-[1px] focus:ring-0 focus:outline-none focus:border-accent text-white px-4 py-2 bg-transparent rounded-lg w-96"></input>
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
                        <RoundedButton submit={true} padding="px-4 py-2 mt-8" font="font-bold" color="bg-accent">Register</RoundedButton>
                        <p className="text-light text-xs w-96">By registering, you agree that your data won't be shared and exploited by any means. </p>
                    </form>
               </section>
            </div>
        </div>
    )
}

export default Register