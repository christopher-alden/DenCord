import { ReactNode } from "react";

type HeaderProps = {
    children: ReactNode
}

const Header = ({children}: HeaderProps) =>{
    return (
        <nav className='flex justify-between px-[10vw] items-center absolute z-20 w-full h-40 text-white text-md '>
            {children}
        </nav>
    
    );
}

export default Header