import {Link, NavLink } from 'react-router-dom'
import {FaSun, FaMoon} from 'react-icons/fa6'
import { useEffect, useState } from 'react'

function getTheme () {
  return localStorage.getItem('theme') || 'light'
}
function Navbar() {
  const [mode, setMode] = useState(getTheme())

  useEffect(()=>{
    document.documentElement.dataset.theme= mode
    localStorage.setItem('theme', mode)
   },[mode])
  const changeMode = ()=>{
     setMode((p)=>{
    
      return p=='light'? 'dark':'light'
     })
  }
  return (
    <nav className='py-6 shadow-md'>
      <div className="align-element flex justify-between items-center">
        <h1 className='text-3xl flex gap-3 items-center'>Articles 
        <span className='cursor-pointer' onClick={changeMode}>{mode=='light'?<FaMoon/>:<FaSun/>}</span></h1>
        
        <div className='flex gap-5'>
          <NavLink className='text-xl' to="/">Home</NavLink>
          <NavLink className='text-xl' to="/about">About</NavLink>
          <NavLink className='text-xl' to="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar