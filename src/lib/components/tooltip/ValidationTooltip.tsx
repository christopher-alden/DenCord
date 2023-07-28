type ValidationTooltipProps = {
    children: string,
    color?: string,
    textColor?: string,
    state: boolean
}

const ValidationTooltip = ({children, color='bg-hover',textColor='text-white', state}: ValidationTooltipProps) =>{
    return (
        <div className={`flex justify-center relative  ${state ? 'visible opacity-100' : 'hidden opacity-0'} transition-all duration-300 ease-in-out`}>
            <div className= {`absolute w-2 h-2 rotate-45 -top-1 rounded- ${color}`}/>
            <div className= {` ${color} px-4 py-1 justify-center items-center flex rounded-md`}>
                <div className= {`${textColor} text-md`}>{children}</div>
            </div>
        </div>
    )
}

export default ValidationTooltip