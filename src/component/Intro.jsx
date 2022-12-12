import React from 'react';
import { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../constant';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = useRef();

  function handle() {
    setPlayVideo(prevPlayVideo => !prevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }
  return (
    <section className='relative h-[100vh] w-full'>
      <video
        src={meal}
        ref={vidRef}
        type='video/mp4'
        loop
        controls={false}
        muted
        className='h-[100%] w-[100%] object-cover'
      ></video>
      <div className='absolute inset-0 bg-black bg-opacity-[0.5] '>
        <div
          className='flex items-center justify-center  w-full  h-[100vh]'
          onClick={handle}
        >
          <div className='h-36 w-36 border-[1px] border-gray-200 rounded-full flex items-center justify-center'>
            {playVideo ? (
              <BsPauseFill className='text-white text-5xl' />
            ) : (
              <BsFillPlayFill className='text-white text-5xl' />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
