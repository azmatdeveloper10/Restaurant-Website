import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../constant/images';

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <nav className='bg-bgColor flex items-center justify-between px-4 py-2 gap-5'>
      <div className='logo '>
        <img src={images.gericht} alt='Logo Igm' className='w-24 sm:w-40 ' />
      </div>
      <ul className='hidden lg:flex flex-row space-x-10 text-white list-none items-center justify-center flex-1'>
        <li>
          <a href='#home' className='hover:text-gray-500'>
            Home
          </a>
        </li>
        <li>
          <a href='#About' className='hover:text-gray-500'>
            About
          </a>
        </li>
        <li>
          <a href='#Menu' className='hover:text-gray-500'>
            Menu
          </a>
        </li>
        <li>
          <a href='#Awards' className='hover:text-gray-500'>
            Awards
          </a>
        </li>
        <li>
          <a href='#Contact' className='hover:text-gray-500'>
            Contact
          </a>
        </li>
      </ul>

      <div className='text-white flex items-center justify-end lg:justify-start gap-5'>
        <a
          href='/'
          className='hover:border-b-2 hover:border-gray-600 text-sm sm:text-base'
        >
          Log-in / Register
        </a>
        <div className='h-10 w-[1px] bg-gray-500'></div>
        <a
          href='/'
          className='hover:border-b-2 hover:border-gray-600 text-sm sm:text-base'
        >
          Book Table
        </a>
      </div>

      <div className='lg:hidden '>
        {toggle ? (
          <div className='flex items-center justify-center'>
            <MdOutlineRestaurantMenu
              className='text-white text-2xl  cursor-pointer'
              onClick={() => {
                setToggle(false);
              }}
            />
          </div>
        ) : (
          <GiHamburgerMenu
            className='text-white  text-2xl cursor-pointer'
            onClick={() => {
              setToggle(true);
            }}
          />
        )}

        {toggle && (
          <ul className='h-[300px] w-[200px] flex flex-col bg-black   absolute top-20 right-10 text-white list-none items-center justify-evenly flex-1'>
            <li>
              <a href='#home' className='hover:text-gray-500'>
                Home
              </a>
            </li>
            <li>
              <a href='#About' className='hover:text-gray-500'>
                About
              </a>
            </li>
            <li>
              <a href='#Menu' className='hover:text-gray-500'>
                Menu
              </a>
            </li>
            <li>
              <a href='#Awards' className='hover:text-gray-500'>
                Awards
              </a>
            </li>
            <li>
              <a href='#Contact' className='hover:text-gray-500'>
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
