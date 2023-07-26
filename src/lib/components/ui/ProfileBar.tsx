import ProfileIcon from './ProfileIcon';
import icon from '../../../assets/DenCordLogo.png';

type ProfileBarProps = {
  username: string;
  activityStatus: string;
  profileImg?: string;
};

const ProfileBar = ({ username, activityStatus, profileImg = icon }:ProfileBarProps) => {
  return (
    <div className="flex w-fit gap-2 px-2 py-1 text-gray-400 items-center rounded-xl hover:bg-hover transition-all duration-300 ease-in-out">
      <div className="flex flex-col items-end">
        <h1 className="font-bold text-sm">{username}</h1>
        <p className="font-light text-xs">{activityStatus}</p>
      </div>
      <ProfileIcon profileImg={profileImg} activityStatus={activityStatus}/>
    </div>
  );
};

export default ProfileBar;
