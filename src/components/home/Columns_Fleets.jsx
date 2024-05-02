import { FaArrowRight } from "react-icons/fa"
import { suitcases, users } from "../../assets"
import { List_Fleets } from "../ui/List_Fleets"

export const Columns_Fleets = ({data, picture, className}) => {
  const fleets = [
    { info: 'POINT TO POINT' },
    { info: 'CITY TOUR TRANSIT' },
    { info: 'AIRPORT ARRIVAL' },
    { info: 'AIRPORT DEPARTURES' },
    { info: 'HOURLY CHAUFFEUR' },
    { info: 'SG TO MALAYSIA' }
  ]

  return (
    <div className='grid lg:grid-cols-2 gap-7 pt-10'>
      <div className={`relative h-80 md:h-full grid items-center bg-sky bg-cover bg-center ${className}`}>
        <div className='absolute top-7 left-10 flex gap-6'>
          <div className='relative h-28 border-l border-gray-500'>
            <div className='absolute bottom-0 h-16 w-[2px] bg-black' />
          </div>
          <div className='text-xl space-y-1'>
            <h5>BUSINESS MINI VAN</h5>
            <h5 className='font-semibold'>VELLFIRE/ALPHARD</h5>
          </div>
        </div>
        <div className='pt-16'>
          <img src={picture} alt='pictures' />
        </div>
      </div>
      <div className="">
        <div>
          <div className='grid grid-cols-2 gap-5'>
            <div className='space-y-5'>
              <div className='flex items-center gap-10'>
                <span className='text-4xl'>6</span>
                <div className='w-12'>
                  <img src={users} alt='users' />
                </div>
              </div>
              <div className='relative border-b border-black w-[85%]'>
                <div className='absolute bottom-0 bg-black w-[15%] py-px' />
              </div>
              <p className='text-balance'>
                Number of <br /> Passengers
              </p>
              <div>
                <List_Fleets
                  className='bg-gradient-to-l to-primary/50 from-transparent'
                  data={fleets}
                />
              </div>
            </div>
            <div className='space-y-5'>
              <div className='flex items-center gap-10'>
                <span className='text-4xl'>4</span>
                <div className='w-12'>
                  <img src={suitcases} alt='suitcases' />
                </div>
              </div>
              <div className='relative border-b border-black w-[85%]'>
                <div className='absolute bottom-0 bg-black w-[15%] py-px' />
              </div>
              <p className='text-balance'>
                2 X 28″ Luggage <br /> (with 3 Passenger)
              </p>
              <div>
                <List_Fleets data={data} />
              </div>
            </div>
          </div>
          <div className='w-fit mx-auto mt-10'>
            <button className='btn_primary text-white'>
              Book Now
              <FaArrowRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
