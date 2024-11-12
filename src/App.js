import React, { Suspense } from 'react'
import {Routes,Route} from 'react-router-dom'
import { lazy } from 'react'
const Nav=lazy(()=> import('./Nav'));
const AboutUs=lazy(()=> import('./AboutUs'));
const Home=lazy(()=>import('./Components/Home'))
const Monitoring=lazy(()=>import('./Components/Monitoring'));
const Profile=lazy(()=>import('./Components/Profile'))
const CarDetailsForm=lazy(()=>import('./Components/CarDetailForm.js'))
const App = () => {
  return (
    <div className=''>
      <Suspense fallback={<div className='flex justify-center items-center h-screen'><div className="w-10 h-10 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin items-center"></div></div>}>
        <Nav/>
        <Routes basename="/vw-ideathon">
        <Route path="/vw-ideathon" exact element={<Home />}></Route>
        <Route path="/*"  element={<Home/>}></Route>
        <Route path="/monitor" exact element={<Monitoring/>}></Route>
        <Route path="/profile" exact element={<Profile/>}></Route>
        <Route path="/service" exact element={<CarDetailsForm/>}></Route>
        <Route path='/Aboutus'exact element={<AboutUs/>}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
