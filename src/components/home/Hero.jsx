import { FaArrowRight } from 'react-icons/fa'

export const Hero = () => {
  return (
    <section id='Home' className='h-screen bg-cover bg-center lg:bg-top bg-hero text-white'>
      <div className='flex justify-center items-center h-full bg-black/35'>
        <div className='space-y-8 lg:pt-10 text-center'>
          <h1 className='text-5xl md:text-[5.6rem] lg:leading-[1.1] font-normal'>
            Private Limousine <br />
            <span className='font-dm_serif italic'>Transfer Service.</span>
          </h1>
          <p className='text-lg md:text-xl'>
            Be it for personal, corporate, events or any other <br /> special
            request, we'll be glad to help.
          </p>
          <div className='flex flex-col lg:flex-row justify-center items-center gap-2 text-sm'>
            <button className='btn_primary'>
              Read More <FaArrowRight className='' size={12} />
            </button>
            <button className='flex items-center gap-2 border py-4 px-10 hover:bg-white hover:text-black rounded-full duration-700 group'>
              Contact Us <FaArrowRight className='' size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
