import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type RoundedButtonProps = {
    children: ReactNode,
    hover?: boolean
    submit?: boolean
    className?: string
    textClassName?: string
    handleEvent?: () => any
}

const RoundedButton = ({children, className, textClassName, hover=true, handleEvent, submit=false} : RoundedButtonProps) =>{

    return(
        <button type={submit ? 'submit' : 'button'} onClick={handleEvent} className={twMerge(`bg-transparent px-4 py-2 rounded-lg ${hover ? 'opacity-100 hover:opacity-75 transition-all duration-300 ease-in-out ' : 'opacity-100'} `, className)}>
            <div className={twMerge(`text-white ns:text-base font-normal whitespace-nowrap text-sm`, textClassName)}>{children}</div>
        </button>
    );
}

export default RoundedButton