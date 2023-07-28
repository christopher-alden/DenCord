import { ReactNode } from "react";

type HeaderProps = {
    children: ReactNode
}

const Header = ({children}: HeaderProps) =>{
    return (
        <nav className='flex justify-between xl:px-[10vw] px-[6vw] items-center absolute z-20 w-full h-20 md:h-40 text-white text-md '>
            {children}
        </nav>
    
    );
}

export default Header