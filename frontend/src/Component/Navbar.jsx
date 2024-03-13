import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 z-20 w-full ${scrolling ? 'bg-[#5f2sf2f] backdrop-blur-lg' : ''}`}>
      <nav className="flex justify-center items-center px-6 py-4">
        <div className="flex justify-between items-center m-4 p-6">
          <ul className='flex gap-8'>
            <li>
              <ScrollLink to='home' smooth={true} duration={500} className="text-black font-bold hover:text-blue-800 hover:underline hover:underline-offset-8">Home</ScrollLink>
            </li>
            <li>
            <ScrollLink to="about" smooth={true} duration={500} className="text-black font-bold hover:text-blue-800 hover:underline hover:underline-offset-8">About</ScrollLink>
            </li>
            <li>
              <ScrollLink to='blog' smooth={true} duration={500} className="text-black font-extrabold hover:text-blue-800 hover:underline hover:underline-offset-8">Blogs</ScrollLink>
            </li>
            <li>
              <ScrollLink to='connect' smooth={true} duration={500} className="text-black font-bold hover:text-blue-800 hover:underline hover:underline-offset-8">Connect</ScrollLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
