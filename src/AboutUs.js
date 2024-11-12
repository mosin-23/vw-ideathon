import React from 'react'
import Lottie from 'lottie-react'
import CarSecure from './Components/carsecure.json'
const AboutUs = () => {
  return (
    <div className='w-auto flex flex-col justify-center items-center'>
      <Lottie animationData={CarSecure} loop={true} className='w-1/4'/>
      <div className='p-5 border border-2  border-emerald-400'>
      <h1 className='p-5 text-center font-semibold font-serif'>At <span className='text-blue-500'>Volkswagen</span>, we have a legacy of crafting vehicles that bring innovation, performance, and quality to the road. Founded in 1937, our commitment to engineering excellence and forward-thinking design has shaped us into one of the world’s most trusted car brands. Volkswagen, meaning "People's Car" in German, was built on a vision to make mobility accessible for everyone, and that vision continues to drive us forward.

Our lineup combines timeless design with the latest technology, from efficient sedans and powerful SUVs to fully electric models, making every drive an exceptional experience. Volkswagen prioritizes sustainability, embracing a future where eco-friendly transportation is the norm. With innovations like our electric ID. series, we're reducing our carbon footprint and leading the industry toward cleaner energy solutions.

Beyond our vehicles, Volkswagen stands for safety, reliability, and a commitment to customer satisfaction. We focus on delivering a driving experience that’s as enjoyable as it is dependable. At Volkswagen, we’re more than just a car brand; we’re a community of drivers who believe in quality, responsibility, and forward-thinking.

Join us as we redefine the future of mobility, one car at a time.</h1>
</div>
    </div>
  )
}

export default AboutUs
