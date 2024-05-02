import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

export const Side_Contact = () => {
  return (
    <div className='fixed top-[35%] text-white z-20'>
      <a
        href='https://wa.link/k7cb4s'
        target='_blank'
        className='flex justify-center items-center bg-[#3ebc3a] hover:bg-[#61cb5d] w-12 h-12 rounded-tr-md hover:w-14 hover:rounded-r-md transition-all duration-200'
      >
        <FaWhatsapp />
      </a>
      <a
        href='tel:6592994192'
        target='_blank'
        className='flex justify-center items-center bg-primary hover:bg-[#db0000] w-12 h-12 rounded-br-md hover:w-14 hover:rounded-r-md transition-all duration-200'
      >
        <FaPhoneAlt size={15} />
      </a>
    </div>
  )
}
