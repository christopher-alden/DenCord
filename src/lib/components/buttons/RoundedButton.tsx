import { ReactNode } from "react";

type RoundedButtonProps = {
    children: ReactNode,
    textColor?: string,
    font?: string,
    color?: string,
    padding?: string,
    size?: string,
    hover?: boolean
    submit?: boolean
    handleEvent?: () => any
}

const RoundedButton = ({children, textColor='text-white',font='font-normal', color='bg-transparent', padding='px-4 py-2', size='text-base', hover=true, handleEvent, submit=false} : RoundedButtonProps) =>{

    return(
        <button type={submit ? 'submit' : 'button'} onClick={handleEvent} className={`${color} ${padding} rounded-lg ${hover ? 'opacity-100 hover:opacity-75 transition-all duration-300 ease-in-out ' : 'opacity-100'} `}>
            <div className={`${textColor} ns:${size} ${font} whitespace-nowrap text-sm`}>{children}</div>
        </button>
    );
}

export default RoundedButton