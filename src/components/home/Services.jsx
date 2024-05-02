import { SlPencil } from "react-icons/sl";
import {
  largest_fleet,
  rentable_rates,
  safety,
  service1,
  service2,
  service3
} from '../../assets'

export const Services = () => {
  const benefits_info = [
    {
      title: 'Airport Transfer',
      text: 'Our driver will await your flight at the airport arrival hall with a name signage that is being provided by you during reservation.',
      img: service1
    },
    {
      title: 'Airport Departure',
      text: 'Essence Limousine will meet our guests at the stipulated place and time of the reservation made for an airport departure.',
      img: service2
    },
    {
      title: 'Point-to-Point Transfer',
      text: 'Essence Limousine will meet our guests at the stipulated place and time of the reservation made for an airport departure.',
      img: service3
    }
  ]

  return (
    <section className='bg-city bg-cover bg-right-bottom text-white'>
      <div className='bg-primary/85 py-16'>
        <div id="Services" className='containers w-[80%]'>
          <div className='text-center space-y-5 my-10'>
            <h3 className='text-4xl'>
              Our <span className='font-dm_serif italic'>Services</span>
            </h3>
          </div>
          <div className='grid lg:grid-cols-3 gap-10 md:gap-5 justify-items-center text-center'>
            {benefits_info.map((benefit) => (
              <div key={benefit.title} className='space-y-4'>
                <div className='w-fit mx-auto'>
                  <img src={benefit.img} alt={benefit.title} />
                </div>
                <h5 className='text-2xl font-bold'>{benefit.title}</h5>
                <p className='px-2 text-lg font-medium'>{benefit.text}</p>
              </div>
            ))}
          </div>
          <div className='w-fit mx-auto mt-5'>
            <button className='flex text-sm items-center gap-2 bg-white text-black py-5 px-12 hover:bg-black hover:text-white rounded-full duration-700'>
              See Our More Services
              <SlPencil size={15} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
