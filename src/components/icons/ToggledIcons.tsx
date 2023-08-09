import { ReactNode } from "react";

type ToggledIconsProps = {
    toggle: React.Dispatch<React.SetStateAction<boolean>>,
    children : ReactNode
}

const ToggledIcons = ({toggle, children}:ToggledIconsProps) =>{
    
    return(
        <>
            <div className="opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out" onClick={()=>toggle(prev=>!prev)}>{children}</div>
        </>
    );
}
export default ToggledIcons