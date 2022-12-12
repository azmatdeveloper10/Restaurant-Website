import React from 'react';
import { images, data } from '../constant';
import Button from './Button';

const Findus = () => {
  return (
    <section className='bg-bgColor py-3 px-4 sm:py-10 sm:px-16'>
      <div className='py-24 w-[100%] max-w-[1200px] mx-auto my-0 flex gap-5 flex-col lg:flex-row items-center justify-between'>
        <div className='flex-1 flex flex-col items-start justify-center w-full'>
          <div>
            <h4 className='text-white font-bold text-2xl'>Contact</h4>
            <img src={images.spoon} alt='Spoon' className='w-20' />
          </div>
          <h2 className='text-primaryColor py-5 text-4xl font-bold'>Find Us</h2>

          <p className='max-w-[470px] text-gray-200 text-base lg:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, non.
          </p>
          <div>
            <h4 className='text-white font-bold mt-5'>Opening Hours </h4>
            <p className='text-white font-extralight mt-3'>
              Monday from 7:00 am to 9:00 pm
            </p>
            <p className='text-white font-extralight'>
              Saturday from 7:00 am to 9:00 pm
            </p>
          </div>
          <Button mt={'mt-10'} w={'w-full'} />
        </div>

        <div>
          <img
            src={images.findus}
            alt='FindUs Image'
            className='max-w-[600px] w-[100%]'
          />
        </div>
      </div>
    </section>
  );
};

export default Findus;
