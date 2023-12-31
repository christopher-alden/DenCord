import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { auth, signInWithGoogle } from "../firebase";
import RoundedButton from "../components/buttons/RoundedButton";
import DenCordLogo from "../components/icons/DenCordLogo";
import Header from "../components/ui/Header";

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

    const signInWithGoogleNavigate = () => {
        signInWithGoogle().then(()=>navigate('/'))
    }
    

    return(
        <div className="h-screen w-screen bg-gradient-to-tr from-black to-sub">
            <Header>
                <DenCordLogo/>
                <div className='flex xl:gap-8 md:gap-4 font-light items-center justify-end'>
                    <RoundedButton handleEvent={()=>navigate('/register')} textClassName="text-white font-bold md:font-semibold" className="bg-transparent border-[1px] border-light border-solid md:px-8 px-4 py-2" >Register</RoundedButton>
                </div>
            </Header>
            {/* <Image attributes="absolute w-screen h-screen z-0" imgAttributes="opacity-10 object-center" src={LoginBG}></Image> */}
            <div className="relative w-full h-full flex justify-center items-center flex-col gap-6 md:gap-10 py-40 px-[6vw] z-10">
                <div className="flex flex-col items-center">
                    <h1 className="text-white capitalize font-bold text-3xl md:text-4xl text-center leading-snug">Welcome back!</h1>
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
                            <RoundedButton handleEvent={signInWithGoogleNavigate} className="bg-white" textClassName="text-black">
                                <div className="flex gap-2 justify-center">
                                    <img className="w-6" src="https://img.icons8.com/windows/32/google-logo.png" alt="google-logo"/>
                                    <h1>Continue with Google</h1>
                                </div>
                            </RoundedButton>
                        <RoundedButton submit={true} className="px-4 py-2 mt-8 bg-accent" textClassName="font-bold">Log In</RoundedButton>
                        <span className="text-light text-xs ">You really don't have an account? <a className="text-xs  text-blue-500" href="/register">Register Here</a></span>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default Login