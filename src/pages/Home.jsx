import { About } from "../components/home/About"
import { Benefits } from "../components/home/Benefits"
import { Fleets_rates } from "../components/home/Fleets_rates"
import { Hero } from "../components/home/Hero"
import { Services } from "../components/home/Services"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Fleets_rates />
      <Benefits />
      <Services />
    </>
  )
}
export default Home