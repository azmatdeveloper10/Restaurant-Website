import { images } from '../constant';

const Chef = () => {
  return (
    <section className='bg-bgColor py-3 px-4 sm:py-10 sm:px-16'>
      <div className='py-10 w-[100%] max-w-[1200px] mx-auto my-0 flex flex-col gap-10  items-center justify-center lg:flex-row'>
        <div className='flex-1  '>
          <img src={images.chef} alt='Chef' className='  w-[100%]' />
        </div>
        <div className='flex-3 w-full lg:w-auto'>
          <p className='text-white'>Chef, World</p>
          <img src={images.spoon} alt='Spoon' className='w-20' />
          <h2 className='text-primaryColor py-5 text-4xl font-bold'>
            What We Believe In
          </h2>

          <div>
            <div className='flex gap-2'>
              <img src={images.quote} alt='Quite' className='w-10 h-10' />
              <p className='max-w-[470px] text-gray-200 text-base lg:text-lg'>
                Lorem ipsum amet consectetur adipisicing elit. Ut impedit amet!
              </p>
            </div>

            <p className='max-w-[470px] text-gray-200 text-base lg:text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, recusandae vitae. Necessitatibus, voluptatum ea. Ea,
              magni corrupti! Beatae blanditiis officiis non accusamus.
            </p>
          </div>

          <div className='text-white mt-10'>
            <h4>Kaven Low</h4>
            <p>Cheaf & Founder</p>
            <img src={images.sign} alt='Sign' className='w-28 mt-10' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
