import { largest_fleet, rentable_rates, safety } from "../../assets"

export const Benefits = () => {
  const benefits_info = [
    {title: 'Safety First', text: 'In Essence Safety Is Our No1 Priority Ensuring A Smooth And A Peaceful Journey.', icon: safety},
    {title: 'Resonable Rates', text: 'Get Flat Rating/Destination/Hourly Wise Rating According To Your Choice.', icon: rentable_rates},
    {title: 'Largest Fleet', text: 'Choose From The Widest Range Of Our Fleet And Get Compatible With The One Of Your Choice.', icon: largest_fleet},
  ]

  return (
    <section className="containers">
      <div className='text-center space-y-5 mb-10'>
          <h3 className='text-4xl'>
          Benefits of Hiring{' '}
            <span className='text-primary font-dm_serif italic'>
              Essence Limousine
            </span>
          </h3>
        </div>
      <div className="grid lg:grid-cols-3 gap-5 justify-items-center text-center">
        {benefits_info.map((benefit) => (
          <div key={benefit.title} className="max-w-[80%]">
            <div className="w-fit mx-auto">
              <img src={benefit.icon} alt={benefit.title} />
            </div>
            <h5 className="text-2xl font-bold text-primary">{benefit.title}</h5>
            <p className="font-medium">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
