import images from '../constant/images';
import Button from './Button';
const AboutUs = () => {
  return (
    <section id='About' className='bg-bgColor py-3 px-4 sm:py-10 sm:px-16'>
      <div
        className='relative py-10 w-[100%] max-w-[1200px] mx-auto my-0 flex flex-col md:flex-row items-center justify-center gap-10
      '
      >
        <div className='flex flex-col md:items-end z-10'>
          <h2 className='text-primaryColor text-2xl font-bold lg:text-4xl '>
            About Us
          </h2>
          <img
            src={images.spoon}
            alt='Spoon'
            className='text-primaryColor mb-5 w-20'
          />
          <p className='max-w-[470px] text-gray-200 text-base lg:text-lg text-right'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            explicabo voluptatibus, ab obcaecati doloremque debitis rerum?
            Numquam facilis iure, magnam fugit totam nesciunt neque veritatis,
            possimus voluptates provident quibusdam eum laudantium modi!
            Reprehenderit tempore adipisci, facere iste totam magni ad.
          </p>
          <Button mt={'mt-5'} />
        </div>

        <div className='z-10'>
          <img
            src={images.knife}
            alt='Knife'
            className='w=[100%] max-h-[750px] '
          />
        </div>

        <div className='flex flex-col md:items-start z-10'>
          <h2 className='text-primaryColor text-2xl font-bold lg:text-4xl'>
            Our Histroy
          </h2>
          <img
            src={images.spoon}
            alt='Spoon'
            className='text-primaryColor mb-5 w-20'
          />
          <p className='max-w-[470px] text-gray-200 text-base lg:text-lg text-left'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            explicabo voluptatibus, ab obcaecati doloremque debitis rerum?
            Numquam facilis iure, magnam fugit totam nesciunt neque veritatis,
            possimus voluptates provident quibusdam eum laudantium modi!
            Reprehenderit tempore adipisci, facere iste totam magni ad.
          </p>
          <Button mt={'mt-5'} />
        </div>
        <img src={images.G} alt='G' className='absolute -z-0' />
      </div>
    </section>
  );
};

export default AboutUs;
