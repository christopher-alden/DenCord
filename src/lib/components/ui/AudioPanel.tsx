import { useState } from 'react';

const AudioPanel = () => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
    const toggleMuted = () =>{
        setIsMuted(!isMuted)
    }
  return (
    <div className="flex items-center justify-center">
      <div onClick={toggleMuted} className='opacity-75 hover:opacity-100 transition-all duration-300 ease-in-out'>
      {isMuted ? (
        <img
        className="w-5 h-5"
          src="https://img.icons8.com/fluency-systems-filled/48/9CA3AF/no-microphone.png"
          alt="no-microphone"
        />
      ) : (
        <img className="w-5 h-5" src="https://img.icons8.com/fluency-systems-filled/48/9CA3AF/microphone.png" alt="microphone"/>
      )}
      </div>
    </div>
  );
};

export default AudioPanel;
