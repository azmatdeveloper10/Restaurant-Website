import React from 'react';
import Button from './Button';
import images from '../constant/images';
const Header = () => {
  return (
    <section id='home' className='bg-bgColor py-3 px-4 sm:py-10 sm:px-16'>
      <div className='py-10 w-[100%] max-w-[1200px] mx-auto my-0 flex flex-col space-x-0 md:space-x-3 space-y-10 md:space-y-0 items-center md:flex-row'>
        <div className='flex-1 flex flex-col  justify-center md:block'>
          <h4 className='text-white text-base font-bold '>
            Lorem ipsum dolor sit
          </h4>
          <img src={images.spoon} alt='Spoon' className=' w-20' />
          <h1 className='text-primaryColor text-4xl lg:text-6xl font-bold py-3'>
            Lorem ipsum dolor <br className='hidden sm:block' /> sit amet
            consectetur.
          </h1>
          <p className='max-w-[470px] text-gray-200 text-base lg:text-lg'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe
            asperiores eum non reiciendis obcaecati distinctio magnam recusandae
            similique? Architecto earum reiciendis dolor iure. Placeat id minus
            a maiores esse distinctio.
          </p>
          <Button mt={'mt-[20px]'} />
        </div>
        <div>
          <img
            src={images.welcome}
            alt='Welcom Photo'
            className='max-w-[400px] w-[100%]  object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
