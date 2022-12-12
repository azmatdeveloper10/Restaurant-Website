import React from 'react';
import { images, data } from '../constant';
const Awards = () => {
  return (
    <section className='bg-bgColor py-3 px-4 sm:py-10 sm:px-16'>
      <div className='py-10 w-[100%] max-w-[1200px] mx-auto my-0 flex items-center  flex-col gap-10 lg:flex-row'>
        <div className='flex flex-col  gap-20 '>
          <div>
            <h4 className='text-white text-xl font-bold'>
              Our Awards & Recognition
            </h4>
            <img src={images.spoon} alt='Spoon' className='w-20' />
            <h2 className='text-primaryColor py-5 text-4xl font-bold'>
              Awards
            </h2>
          </div>
          <div className='flex flex-wrap  gap-10 '>
            {data.awards.map(award => (
              <div key={award.title} className='text-white flex  gap-5'>
                <img src={award.imgUrl} alt='AwardImg' className='w-20' />
                <div>
                  <h4 className='text-primaryColor font-bold'>{award.title}</h4>
                  <p className='max-w-[470px] text-gray-200 text-base lg:text-lg'>
                    {award.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <img src={images.laurels} alt='Awards-photo' />
        </div>
      </div>
    </section>
  );
};

export default Awards;
