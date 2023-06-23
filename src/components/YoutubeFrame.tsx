import { useState } from 'react';
import VideoPlayIcon from './ui/Icons/VideoPlayIcon';
import YoutubeGreenShape from './ui/Images/YoutubeGreenShape';
import YoutubeYellowShape from './ui/Images/YoutubeYellowShape';

const YoutubeFrame = () => {
  const [hasPlayed, setHasPlayed] = useState(false);
  const handleButtonClick = () => setHasPlayed(true);

  return (
    <div className='max-w-[1160px] mx-auto my-0 relative p-4'>
      {hasPlayed ? (
        <iframe
          src='https://www.youtube.com/embed/tjriZyHjF4k?autoplay=1&cc_load_policy=1&fs=0&color=white'
          allow='autoplay'
          allowFullScreen
          className=' aspect-video rounded-3xl w-full shadow-[rgba(0,0,0,0.12)_0px_2px_64px] z-[5] relative'
        />
      ) : (
        <button
          onClick={handleButtonClick}
          className='flex justify-center items-center w-full aspect-video z-[5] relative'
        >
          <VideoPlayIcon />
          <img
            src='https://www.getstark.co/video-still__052023.webp'
            alt='video-overlay'
            className='absolute top-0 left-0 rounded-3xl shadow-[rgba(0,0,0,0.12)_0px_2px_64px]'
          />
        </button>
      )}

      <YoutubeGreenShape />
      <YoutubeYellowShape />
    </div>
  );
};

export default YoutubeFrame;
