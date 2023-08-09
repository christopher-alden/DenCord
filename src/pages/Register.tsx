import DenCordLogo from "../components/icons/DenCordLogo"
import ProfileIcon from "../assets/DenCordLogoBG.png"
import Header from "../components/ui/Header"
import RoundedButton from "../components/buttons/RoundedButton"
import { useLocation, useNavigate } from "react-router-dom"
import { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth, db, signInWithGoogle} from "../firebase"
import { doc, setDoc } from "firebase/firestore"; 
import Loader from "../components/loader/Loader"



const Register = () =>{
    const navigate = useNavigate()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const filledUsername = searchParams.get('username') || ''

    const [usernameValue , setUsernameValue] = useState<string>(filledUsername);
    // TODO : error message
    const [error, setError] = useState<boolean>(false)

    const changeField = (value:string) =>{
        setUsernameValue(value)
    }

    const handleRegister = async (e:any) =>{
        e.preventDefault()

        const username = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value

        try{
            const response = await createUserWithEmailAndPassword(auth, email, password)
            
            await updateProfile(response.user, {
                displayName: username, photoURL: ProfileIcon
            }).then( async() => {
                await setDoc(doc(db, "users", response.user.uid), {
                    uid: response.user.uid,
                    username,
                    email,
                    photoUrl: ProfileIcon
                });
                await setDoc(doc(db, "userChats", response.user.uid), {});
                navigate('/')
            })
        }
        catch(err){
            console.log(err)
            setError(true)
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
                    <RoundedButton handleEvent={()=>navigate('/login')} textClassName="text-white font-bold md:font-semibold" className="bg-transparent border-[1px] border-light border-solid md:px-8 px-4 py-2">Log in</RoundedButton>
                </div>
            </Header>
            <div className="w-full h-full flex flex-col justify-center items-center gap-6 md:gap-10 py-40 px-[6vw] ">
                <h1 className="text-white capitalize font-bold text-3xl md:text-4xl text-center leading-snug">Create your<br/>Dencord account</h1>
                <section>
                        <form onSubmit={handleRegister} className="flex flex-col gap-2 md:gap-4 md:w-[480px] w-[320px]">
                            <label className="flex flex-col gap-2">
                                <p className="text-white  text-sm">Username</p> 
                                <input spellCheck={false} type="text" className="border-[1px] focus:ring-0 focus:outline-none focus:border-accent text-white px-4 py-2 bg-transparent rounded-lg " onChange={(e)=>{changeField(e.target.value)}} value={usernameValue}></input>
                            </label>
                            <label className="flex flex-col gap-2">
                                <p className="text-white  text-sm">Email</p> 
                                <input spellCheck={false} type="text" className="border-[1px] focus:ring-0 focus:outline-none focus:border-accent text-white px-4 py-2 bg-transparent rounded-lg "></input>
                            </label>
                            <label className="flex flex-col gap-2">
                                <p className="text-white  text-sm">Password</p> 
                                <input spellCheck={false} type="password" className="border-[1px] focus:ring-0 focus:outline-none focus:border-accent text-white px-4 py-2 bg-transparent rounded-lg "></input>
                            </label>
                            <div className="flex items-center text-white">
                                <div className="w-1/2 h-[1px] bg-light"/> <p className="text-center px-4">Or</p> <div/><div className="w-1/2 h-[1px] bg-light"/>
                            </div>
                            <RoundedButton handleEvent={signInWithGoogleNavigate} className="bg-white" textClassName="text-black" >
                                <div className="flex gap-2 justify-center">
                                    <img className="w-6" src="https://img.icons8.com/windows/32/google-logo.png" alt="google-logo"/>
                                    <h1>Continue with Google</h1>
                                </div>
                            </RoundedButton>
                            <RoundedButton submit={true} className="px-4 py-2 mt-8 bg-accent" textClassName="font-bold">Register</RoundedButton>
                            <p className="text-light text-xs flex">By registering, you agree that your data won't be shared and exploited by any means.</p>
                        </form>
                </section>
            </div>
        </div>
    )
}

export default Register