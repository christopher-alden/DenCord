import DenCordLogo from "../components/icons/DenCordLogo"
import Header from "../components/ui/Header"
import RoundedButton from "../components/buttons/RoundedButton"
import { useLocation, useNavigate } from "react-router-dom"


const Register = () =>{
    const navigate = useNavigate()
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const filledUsername = searchParams.get('username') || ''

    return(
        <div className="h-screen w-screen">
            <Header>
                <DenCordLogo/>
                <div className='flex xl:gap-8 md:gap-4 font-light items-center justify-end'>
                    <RoundedButton handleEvent={()=>navigate('/login')} textColor='text-white' color='bg-transparent border-[1px] border-light border-solid' padding='md:px-8 px-4 py-2'>Log in</RoundedButton>
                </div>
            </Header>
            <div className="w-full h-full flex flex-col justify-center items-center gap-10">
                <h1 className="text-white capitalize font-bold poppins text-4xl text-center leading-snug">Create your<br/>Dencord account</h1>
               <section className="w-[500px] h-[400px] glass shadow-md rounded-lg">

               </section>
            </div>
        </div>
    )
}

export default Register