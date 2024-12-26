import React from 'react'
import himg from './assets/cmsoon.png'
import './Header.css'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';


function Header({show, setShow}) {
  const count = useSelector((state)=>state.count)

  const showdata = () => {
    setShow(!show);
  }
  console.log(`count is: ${count}`)
  
  return (
    <div className='flex justify-between items-center p-2 bg-gray-800 text-white'>
        <div className='w-12'>
            <img className='' src={himg} alt="" />
        </div>
        {/* <button className='bg-red-600 p-1 rounded-lg' onClick={showdata}>{show ? 'Back':'Data'}</button> */}
       <nav className='flex mr-5 '>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about" className="mr-4">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  )
}

export default Header