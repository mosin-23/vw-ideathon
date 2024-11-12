import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar flex mt-5 lg:space-x-80 items-center justify-center">
      <h1 className='text-3xl font-bold border border-2 border-blue-300 p-2 rounded-full shadow-lg cursor-pointer' onClick={() => { window.location.reload(); }}>VW</h1>

      <button 
        className="lg:hidden text-2xl p-2 rounded-md focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="text-black">☰</span>
      </button>

      <ul className={`flex lg:space-x-4 items-center justify-center justify-around lg:flex-row ${isMenuOpen ? 'flex-col mt-4' : 'hidden lg:flex'}`}>
        <li className='cursor-not-allowed'>
          Welcome <span className='text-blue-700 font-semibold font-serif cursor-not-allowed hover:underline'>Mosin</span>
        </li>
        <li className='cursor-pointer px-2 py-1 text-black hover:bg-black hover:text-white rounded-md'>
          <Link to="/">HOME</Link>
        </li>
        <li className='cursor-pointer px-2 py-1 text-black hover:bg-black hover:text-white rounded-md'>
          <Link to="/monitor">MONITORING</Link>
        </li>
        <li className='cursor-pointer px-2 py-1 text-black hover:bg-black hover:text-white rounded-md'>
          <Link to="/profile">PROFILES</Link>
        </li>
        <li className='cursor-pointer px-2 py-1 text-black hover:bg-black hover:text-white rounded-md'>
          <Link to="/service">SERVICES</Link>
        </li>
        <li className='cursor-pointer px-2 py-1 text-white bg-black rounded-xl'>
          <Link to="/Aboutus">ABOUT US</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserNav;
