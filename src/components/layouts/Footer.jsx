import { Link as LinkScroll } from 'react-scroll'
import { Link } from 'react-router-dom'
import { logo } from '../../assets'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

export const Footer = () => {
  return (
    <footer className='text-white'>
      <div className='bg-black'>
        <div className='containers grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center gap-5'>
          <div className='w-72 space-y-3 mb-6'>
            <LinkScroll to='Home' className='max-w-[80%]'>
              <img src={logo} alt='logo' />
            </LinkScroll>
            <p className='text-pretty'>
              Urban Limousine services in Singapore are amalgamated with
              timeless and trusted professional services to outreach the upper
              echelons of luxury. Corporate private car rental with quality
              chauffeur services Singapore is at your disposal now.
            </p>
          </div>
          <div className='space-y-3'>
            <h5 className='text-nowrap font-semibold'>QUICK LINKS</h5>
            <div className='grid gap-2'>
              <LinkScroll to='About' className='hover:text-primary duration-500'>
                About
              </LinkScroll>
              <LinkScroll
                to='FleetsRates'
                className='hover:text-primary duration-500'
              >
                Our Fleets/Rates
              </LinkScroll>
              <LinkScroll
                to='Services'
                className='hover:text-primary duration-500'
              >
                Services
              </LinkScroll>
              <Link className='hover:text-primary duration-500'>Corporate</Link>
              <Link className='hover:text-primary duration-500'>
                Places of Interest
              </Link>
              <Link className='hover:text-primary duration-500'>Contact</Link>
            </div>
          </div>
          <div className='space-y-3'>
            <h5 className='font-semibold'>SERVICES</h5>
            <div className='grid gap-2'>
              <Link>Point To Point Transfers</Link>
              <Link>City Tour Transit</Link>
              <Link>Airport Arrival</Link>
              <Link>Airport Departure</Link>
              <Link>Hourly Chauffeur Services</Link>
              <Link>Singapore to Malaysia Private Transport</Link>
            </div>
          </div>
          <div className='space-y-3'>
            <h5 className='font-semibold'>CONTACT US</h5>
            <div className='grid gap-2'>
              <div className='flex gap-2'>
                <div>
                  <FaMapMarkerAlt size={18} />
                </div>
                <p>
                  ESSENCE LIMOUSINE UEN: 53466831C 535 Hougang Street 52 #04-22,
                  Singapore 530535
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <div>
                  <FaPhoneAlt size={15} />
                </div>
                <p>+65 9299 4192</p>
              </div>
              <div className='flex gap-2 items-center'>
                <div>
                  <IoMdMail size={17} />
                </div>
                <p>Essencelimousine@hotmail.com</p>
              </div>
              <div className='flex gap-2 items-center'>
                <a
                  href=''
                  className='bg-[#38538D] hover:bg-[#4169b4] p-3 rounded-md'
                >
                  <FaFacebook size={22} />
                </a>
                <a
                  href=''
                  className='bg-[#A10304] hover:bg-[#bb0001] p-3 rounded-md'
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href=''
                  className='bg-[#1D94DE] hover:bg-[#45aceb] p-3 rounded-md'
                >
                  <FaTwitter size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center py-7 bg-primary'>
        <span>© 2023 Urban Limousine. All rights reserved</span>
      </div>
    </footer>
  )
}
