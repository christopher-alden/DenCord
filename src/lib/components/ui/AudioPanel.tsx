import { useState } from 'react';
import ToggledIcons from '../icons/ToggledIcons';
import UnDeafen from '../../../assets/icons/Audio.png';
import Deafen from '../../../assets/icons/Deafen.png';

const AudioPanel = () => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isDeafen, setIsDeafen] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-4 justify-center">
      <ToggledIcons toggle={setIsMuted}>
        {isMuted ? (
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/fluency-systems-filled/48/9CA3AF/no-microphone.png"
            alt="no-microphone"
          />
        ) : (
          <img
            className="w-5 h-5"
            src="https://img.icons8.com/fluency-systems-filled/48/9CA3AF/microphone.png"
            alt="microphone"
          />
        )}
      </ToggledIcons>

      <ToggledIcons toggle={setIsDeafen}>
        {isDeafen ? (
          <img
            className="w-5 h-5"
            src={Deafen}
            alt="no-microphone"
          />
        ) : (
          <img
            className="w-5 h-5"
            src={UnDeafen}
            alt="microphone"
          />
        )}
      </ToggledIcons>
    </div>
  );
};

export default AudioPanel;
