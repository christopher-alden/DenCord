import RoundedButton from "../buttons/RoundedButton";
import logo from '../../../assets/DenCordLogo.png'

const DenCordLogo = () => (
  <RoundedButton hover={false} padding="px-0 py-0">
    <div className="flex justify-center items-center gap-2 poppins">
      <img
        src={logo}
        alt=""
        className="w-5 h-5"
      />
      <h1 className="text-xl uppercase font-bold">DenCord</h1>
    </div>
  </RoundedButton>
);

export default DenCordLogo;
