import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Marquee from "react-fast-marquee";
import { PiEngine } from "react-icons/pi";
import { BsFuelPump } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import { FaCar } from "react-icons/fa";
import Marq from './Marq';

const Home = () => {
  const [en, seten] = useState('');
  
  const notify = () => {
    toast("Engine Started!", {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    });
  };

  const notifyStop = () => {
    toast.error("Engine Stopped", {
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655 9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457 3 3m5.457 5.457 7.086 7.086m0 0L21 21" />
      </svg>
    });
  };

  return (
    <>
      <div className="flex flex-col lg:flex-col items-center justify-center mt-5 px-4">
        <div className={`flex flex-col lg:flex-col border-2 border-emerald-500 justify-center items-center w-full lg:w-auto rounded-lg p-5 mb-5 lg:mb-0 hover:shadow-lg hover:shadow-rose-600 cursor-default ${en === 'start' ? 'shadow-xl shadow-emerald-400' : ''}`}>
          {
            en === 'start' &&
            <button className="relative py-1 px-4 bg-white text-black rounded-lg flex items-center space-x-2 border-2 border-blue-200 font-bold">
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
              <span>Live</span>
            </button>
          }
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm1HlMtgW3dopi_zzgZnGclmf_seetnI46bA&s" className="w-full lg:w-96 mb-4" alt="" />
          <h1 className="font-bold p-1 flex text-center"><FaCar className='mr-2 mt-1'/> Car Model: <span className="italic  text-red-500">Volkswagen Virtus GT Plus Sport</span></h1>
          <h1 className="font-bold p-1">Reg No: <span className="italic">AP 39 JN XXXX</span></h1>
          <h1 className="font-bold p-1">Year: <span className="font-semibold text-gray-600">2023</span></h1>
          <h1 className="font-bold p-1 flex items-center"><PiEngine className='mr-2'/>Engine: <span className="font-semibold text-red-500">1498CC</span></h1>
          <h1 className="font-bold p-1 flex items-center"><BsFuelPump className='mr-2'/> Fuel: <span className="font-semibold text-green-500">PETROL</span></h1>
          <h1 className="font-bold p-1 flex items-center"><IoMdSpeedometer className='mr-2items-center'/>KM Driven: <span className="font-semibold text-pink-500">10000 KM</span></h1>
          <h1 className="font-bold p-1">ENGINE Status: <span className="font-semibold text-orange-400">{en === 'start' ? 'Running' : 'Halt'}</span></h1>
        </div>

        <div className="mt-5 flex flex-col lg:flex-row items-center justify-center w-full mb-3">
          <button className="px-4  py-2 mr-5  bg-green-500 hover:shadow-lg hover:shadow-gray-400 rounded-md text-white w-full sm:w-auto" onClick={() => { setTimeout(() => { seten('start'); notify() }, 2000); }}>START</button>
          <button className="px-4 py-2 bg-cyan-500  rounded-md text-white hover:shadow-lg hover:shadow-gray-400 w-full sm:w-auto" onClick={() => { setTimeout(() => { seten('etop'); notifyStop() }, 2000); }}>STOP</button>
          <div className="flex flex-col lg:flex-row items-center justify-center mt-5 lg:mb-5 lg:ml-5">
            <label htmlFor="Ac" title="AC" className="font-bold mr-3">AC:</label>
            <div className="flex items-center mt-5 ">
              <label htmlFor="min">18</label>
              <input type="range" name="AC" id="min" className="cursor-pointer accent-black  bg-white border-b-teal-600 mx-2" min="18" max="25" defaultValue="20" />
              <label htmlFor="min">25</label>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
      <Marquee><Marq /></Marquee>
    </>
  );
};

export default Home;