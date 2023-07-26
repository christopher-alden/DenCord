import logo from '../../../assets/DenCordLogo.png';
import { useState } from 'react';

const GroupIcon = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const changeHover = () =>{
    setIsHovered(!isHovered)
  }
  return (
    <div className={`relative p-3 ${isHovered ? ' bg-accent':'bg-main'}  transition-all duration-100 ease-in-out flex justify-center items-center rounded-full`} onMouseEnter={changeHover} onMouseLeave={changeHover}>
      <div className={`w-14 h-14 rounded-2xl ${isHovered ? 'scale-[100%] bg-accent':'scale-0 bg-main'} absolute transition-all duration-100 ease-in-out`} />
      <img
        className="opacity-75 w-fit "
        src={logo}
        alt="DC Logo"
      />
    </div>
  );
};

export default GroupIcon