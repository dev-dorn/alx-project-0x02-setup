import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex items-center rounded-lg justify-between max-w-6xl mx-auto px-6 py-4'>
      <div className='text-xl font-bold text-primary'>
        Airbnb

      </div>
      {/* Nav links*/}
      <ul className='flex items-center gap-6'>
        <li><a href='#' className='hover:text-primary'>Home</a></li>
        <li><a href='#' className='hover:text-primary'>Experiences</a></li>
        <li><a href='#' className='hover:text-primary'>Services</a></li>
        
        <div className='flex items-center gap-4'>
          <button className=' px-4 py-2 rounded-lg border border-primary text-primary hover:bg-bg-light transition'>
            Become a Guest
          </button>
          <button className='px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-hover transition'>
            Log In
          </button>
        </div>

      </ul>


    <div>

      
    </div>
    </nav>
  )
}

export default NavBar
