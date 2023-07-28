import {ReactNode} from 'react';

type HamburgerProps = {
  children: ReactNode;
  state: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  order?: string;
  parent?: string;
};

const Hamburger = ({children, state, toggle, order, parent}: HamburgerProps) => {
  return (
    <div className={`${order} ${parent}`}>
        <button onClick={()=>toggle(prev=>!prev)}>
            <img
            className="w-8 h-8 xl:hidden"
            src="https://img.icons8.com/ios-filled/50/FFFFFF/menu--v6.png"
            alt="menu--v6"
        />
        </button>
      
      {state ? <div>{children}</div> : <div className='hidden'>{children}</div>}
    </div>
  );
};

export default Hamburger;
