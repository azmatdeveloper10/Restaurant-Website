import { images, data } from '../constant/index';
import Button from './Button';

const Menu = () => {
  return (
    <section id='Menu' className={`bg-bgColor py-3 px-4 sm:py-10 sm:px-16`}>
      <div className='py-10 w-[100%] max-w-[1200px] mx-auto my-0'>
        <div className='flex items-center justify-center flex-col py-20 '>
          <p className='text-white text-lg font-bold'>
            Menu that fits your platte
          </p>
          <img src={images.spoon} alt='Spoon' className='w-20' />
          <h2 className='text-3xl font-bold text-primaryColor mt-5 lg:text-4xl '>
            Todays Special
          </h2>
        </div>
        <div className='flex flex-col justify-around lg:items-center lg:justify-center lg:flex-row gap-5 text-white'>
          <div className='flex-1 space-y-8'>
            <div className='text-center'>
              <h3 className='text-white text-2xl font-bold'>Drinks</h3>
            </div>
            {data.wines.map(item => (
              <div key={item.title}>
                <div className='flex items-center justify-between'>
                  <h4>{item.title}</h4>
                  <div className='h-[2px] w-[50%] bg-primaryColor '></div>
                  <p>{item.price}</p>
                </div>
                <p className='max-w-[470px] text-gray-200 text-base lg:text-lg'>
                  {item.tags}
                </p>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center'>
            <img
              src={images.menu}
              alt='Menu image'
              className='max-h-[600px] max-w-[450px] w-[100%]'
            />
          </div>
          <div className='flex-1 space-y-8'>
            <div className='text-center'>
              <h3 className='text-white text-2xl font-bold'>Drinks</h3>
            </div>
            {data.cocktails.map(item => (
              <div key={item.title}>
                <div className='flex items-center justify-between'>
                  <h4>{item.title}</h4>
                  <div className='h-[2px] w-[50%] bg-primaryColor '></div>
                  <p>{item.price}</p>
                </div>
                <p className='max-w-[470px] text-gray-200 text-base lg:text-lg'>
                  {item.tags}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex md:items-center justify-center '>
          <Button mt={'mt-10'} />
        </div>
      </div>
    </section>
  );
};

export default Menu;
