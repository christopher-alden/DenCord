import { useNavigate } from "react-router-dom";
import RoundedButton from "../components/buttons/RoundedButton";
import DenCordLogo from "../components/icons/DenCordLogo";
import Header from "../components/ui/Header";
import Loader from "../components/loader/Loader";

const Login = () =>{
    const navigate = useNavigate()
    return(
        <div>
            {/* <Header>
                <DenCordLogo/>
                <div className='flex xl:gap-8 md:gap-4 font-light items-center justify-end'>
                    <RoundedButton handleEvent={()=>navigate('/register')} textColor='text-white' color='bg-transparent border-[1px] border-light border-solid' padding='md:px-8 px-4 py-2'>Register</RoundedButton>
                </div>
            </Header> */}
            <Loader/>
        </div>
    );
}

export default Login