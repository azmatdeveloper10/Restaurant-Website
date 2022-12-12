import React from 'react';
import { images } from '../constant';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <section className='bg-bgColor pt-3 px-4 sm:pt-10 sm:px-16'>
      <div className='pt-10 w-[100%] max-w-[1200px] mx-auto my-0'>
        <div className='flex flex-col items-center justify-center'>
          <div>
            <h4 className='text-white font-bold text-2xl'>Newsletter</h4>
            <img src={images.spoon} alt='Spoon' className='w-20' />
          </div>
          <h2 className='text-primaryColor py-5 text-4xl font-bold'>
            Subscribe To Our Newsletter
          </h2>
          <p className='mb-5 text-gray-300 text-sm'>
            And never miss the latest update
          </p>
          <form action=''>
            <input
              type='email'
              name='Email'
              id='Email'
              placeholder='Email'
              className='h-10 w-60 text-primaryColor p-2 border-primaryColor border-[1px] bg-transparent focus:outline-none'
            />
            <input
              type='submit'
              value='Subscribe'
              className=' ml-2 bg-primaryColor p-2 text-black'
            />
          </form>
        </div>
        <hr className='mt-10 text-gray-300' />

        <div className='flex flex-col items-start justify-between py-10 space-y-10 lg:space-y-0 lg:items-center lg:flex-row'>
          <div className='text-white'>
            <h3 className='text-xl'>Contact</h3>
            <p className='text-gray-500 text-sm'>
              Commercial Market 6th road Rawalpindy
            </p>
            <p className='text-gray-500 text-sm'>+928454478</p>
            <p className='text-gray-500 text-sm'>+928454478</p>
          </div>

          <div className='flex flex-col items-start lg:items-center '>
            <img src={images.gericht} alt='logo' />
            <p className='text-gray-200 text-sm max-w-[400px] text-left lg:text-center'>
              Lorem ipsum, dolorelit Fugiat expedita . Fugiat expedita culpa
              voluptatem explicabo animi veritatis.
            </p>
            <img src={images.spoon} alt='Spoon' className='w-20 my-5' />
            <div className='flex items-center justify-evenly gap-3'>
              <FiFacebook className='text-gray-100 text-3xl cursor-pointer' />
              <FiTwitter className='text-gray-100 text-3xl cursor-pointer' />
              <FiInstagram className='text-gray-100 text-3xl cursor-pointer' />
            </div>
          </div>
          <div className='text-white'>
            <h3 className='text-xl'>Woring Hours</h3>
            <p className='text-gray-500 text-sm'>Monday from 8am to 4pm</p>
            <p className='text-gray-500 text-sm'>Friday 7:00 am to 11:30am</p>
          </div>
        </div>
        <div className='flex items-center justify-center py-2'>
          <p className='text-gray-300 font-extralight'>
            CopyRight 2022 | Azmat Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
