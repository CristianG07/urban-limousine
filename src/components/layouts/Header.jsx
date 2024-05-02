import { Link as LinkScroll } from 'react-scroll'
import { logo } from '../../assets'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa6'

export const Header = () => {
  const [isActiveScroll, setIsActiveScroll] = useState(false)
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsActiveScroll(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`fixed top-0 w-full text-white py-3 lg:py-3 text-nowrap z-20 ${isActiveScroll ? 'bg-black' : 'bg-transparent'} duration-500`}>
      <nav className='w-[90%] max-w-7xl mx-auto flex items-center justify-between'>
        <LinkScroll to='Home' className='w-52 lg:w-60'>
          <img src={logo} alt='logo' />
        </LinkScroll>
        <div className='hidden lg:flex gap-6 text-gray-300'>
          <LinkScroll to='About' className='hover:text-white duration-500'>About</LinkScroll>
          <LinkScroll to='FleetsRates' className='hover:text-white duration-500'>Our Fleets/Rates</LinkScroll>
          <LinkScroll to='Services' className='hover:text-white duration-500'>Services</LinkScroll>
          <Link className='hover:text-white duration-500'>Corporate</Link>
          <Link className='hover:text-white duration-500'>Places of Interest</Link>
          <Link className='hover:text-white duration-500'>Contact</Link>
        </div>
        <Link
          to='/'
          className='hidden lg:block bg-white text-black py-2 px-5 rounded-full'
        >
          Book Now
        </Link>
        <button
          onClick={() => setIsOpenSidebar((prev) => !prev)}
          className='lg:hidden z-20'
        >
          <FaBars size={40} />
        </button>
      </nav>
    </header>
  )
}
