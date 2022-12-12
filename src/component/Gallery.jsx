import React from 'react';
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs';
import { images } from '../constant';
import Button from './Button';

const Gallery = () => {
  const scrollRef = React.useRef(null);
  const GalleryImages = [
    images.gallery01,
    images.gallery02,
    images.gallery03,
    images.gallery04,
  ];

  const scrool = function (direction) {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <section className='bg-bgColor  flex items-center'>
      <div className='flex-1 '>
        <div>
          <h4 className='text-white font-bold text-lg'>Instagrame</h4>
          <img src={images.spoon} alt='Spoon' className='w-20' />
        </div>
        <h2 className='text-primaryColor text-5xl font-bold my-7'>
          Photo Gallery
        </h2>
        <p className='max-w-[470px] text-gray-200 text-base lg:text-lg'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          cupiditate ex, temporibus corrupti impedit at, quia doloribus odio eum
          qui ut natus. Dignissimos, dolores aliquid?
        </p>

        <Button mt={'mt-10'} />
      </div>
      <div flex='flex-1 flex flex-row  relative max-w-[50vw]'>
        <div ref={scrollRef} className='flex overflow-x-scroll'>
          {GalleryImages.map((img, index) => (
            <div key={img}>
              <img
                src={img}
                alt='Gallery-img'
                className='h-[100%] w-[100%] object-contain'
              />
            </div>
          ))}
        </div>
        <div>
          <BsArrowLeftShort onClick={() => scrool('left')} />
          <BsArrowRightShort onClick={() => scrool('right')} />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
