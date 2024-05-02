import { about_img } from '../../assets'
import { FaArrowRight, FaRegCheckCircle } from 'react-icons/fa'

export const About = () => {
  const list_about = [
    { info: 'Professionally Trained Chauffeurs' },
    { info: '24/7 Full-Service Transportation' },
    { info: 'Easy Online Booking' },
    { info: 'Prompt Customer Service' }
  ]

  return (
    <section id='About'>
      <div className='containers'>
        <div className='text-center space-y-5 my-10'>
          <h3 className='text-4xl'>
            About{' '}
            <span className='text-primary font-dm_serif italic'>
              Essence Limousine
            </span>
          </h3>
          <span>Private Limousine Transfer Service</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          <div>
            <img src={about_img} alt='about_img' />
          </div>
          <div className='space-y-6'>
            <p>
              Essence Limousine services in Singapore are amalgamated with
              timeless and trusted professional services to outreach the upper
              echelons of luxury. Corporate private car rental with quality
              chauffeur services Singapore is at your disposal now. Whether you
              need luxury or corporate limo for business or leisure trips, we
              are available at your beck and call.
            </p>
            <ul className='space-y-3'>
              {list_about.map((list) => (
                <li key={list.info} className='flex items-center gap-2'>
                  <div className='text-primary'>
                    <FaRegCheckCircle size={23} />
                  </div>
                  <p>{list.info}</p>
                </li>
              ))}
            </ul>
            <button className='btn_primary text-white'>
              Read More <FaArrowRight className='' size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
