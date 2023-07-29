import {useEffect, useState} from 'react';
import Wierd from '../../data/Wierd.json';
import './Loader.css';
import {getRandomGenerator} from '../../utils/randomGenerator';

const Loader = () => {
  const [loadingSentence, setLoadingSentence] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (Wierd.loadingSentences) {
        const randomSentences = getRandomGenerator(Wierd.loadingSentences);
        setLoadingSentence(randomSentences);
      }
    } catch (err) {
      console.error('Error:', err);
    }
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-8 px-10 py-10">
      <div className="loader" />
      <h1 className="text-lg md:text-xl text-white poppins animate-pulse capitalize text-center">{loadingSentence}</h1>
    </div>
  );
};

export default Loader;
