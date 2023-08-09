type profileIconProps = {
  profileImg: string;
  activityStatus: string;
};

const ProfileIcon = ({ profileImg, activityStatus }: profileIconProps) => {
    const checkStatus = (activityStatus: string) => {
        if(activityStatus === 'online') return 'bg-green-500'
        else if(activityStatus === 'away') return 'bg-red-500'
        else if(activityStatus === 'offline') return 'bg-light'
        else return 'bg-light'
    }
  return (
    <div className="w-8 h-8 overflow-hidden rounded-full bg-accent flex justify-center items-center">
      <img
        className="w-full h-full  object-cover object-center "
        src={profileImg}
        alt="profileIcon"
      />
      <div className="w-10 h-10 absolute flex justify-end items-end ">
        <div className={`w-4 h-4 ${checkStatus(activityStatus)} rounded-full border-sub border-2`}></div>
      </div>
    </div>
  );
};

export default ProfileIcon;
