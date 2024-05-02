import { mercedes_e, mercedes_s, mini_van, minibus, viano } from '../../assets'
import { Columns_Fleets } from './Columns_Fleets'

export const Fleets_rates = () => {
  const data = [
    { info: '$70 SGD' },
    { info: '$70 SGD / HR' },
    { info: '$90 SGD' },
    { info: '$70 SGD' },
    { info: '$70 SGD / HR (3hr Min)' },
    { info: 'EMAIL FOR PRICES' }
  ]
  const data2 = [
    { info: '$80 SGD' },
    { info: '$70 SGD / HR' },
    { info: '$90 SGD' },
    { info: '$80 SGD' },
    { info: '$70 SGD / HR (3hr Min)' },
    { info: 'EMAIL FOR PRICES' }
  ]
  const data3 = [
    { info: '$85 SGD' },
    { info: '$80 SGD / HR' },
    { info: '$95 SGD' },
    { info: '$90 SGD' },
    { info: '$80 SGD / HR (3hr Min)' },
    { info: 'EMAIL FOR PRICES' }
  ]
  const data4 = [
    { info: '$180 SGD' },
    { info: '$180 SGD / HR' },
    { info: '$180 SGD' },
    { info: '$170 SGD' },
    { info: '$180 SGD / HR (3hr Min)' },
    { info: 'EMAIL FOR PRICES' }
  ]

  return (
    <section>
      <div id='FleetsRates' className='containers'>
        <div className='text-center space-y-5 my-10'>
          <h3 className='text-4xl'>
            Fleets / Rates{' '}
            <span className='text-primary font-dm_serif italic'>
              Essence Limousine
            </span>
          </h3>
          <span>We are not just Chauffeurs but your Butlers on Wheels.</span>
        </div>
        <Columns_Fleets data={data} picture={mini_van} />
        <Columns_Fleets data={data2} picture={viano} className='lg:order-1' />
        <Columns_Fleets data={data3} picture={minibus} />
        <Columns_Fleets data={data2} picture={mercedes_e} className='lg:order-1' />
        <Columns_Fleets data={data4} picture={mercedes_s} />
      </div>
    </section>
  )
}
