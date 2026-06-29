import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Divisions } from '../components/sections/Divisions';
import { Schedule } from '../components/sections/Schedule';
import { Tickets } from '../components/sections/Tickets';
import { Inscription } from '../components/sections/Inscription';
import { Gallery } from '../components/sections/Gallery';
import { Sponsors } from '../components/sections/Sponsors';
import { FAQ } from '../components/sections/FAQ';
import { Recompenses } from '../components/sections/Recompenses';
import { PlanAcces } from '../components/sections/PlanAcces';
import { Contact } from '../components/sections/Contact';
export function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <Gallery /> */}
      <Recompenses />
      <Schedule />
      <Divisions />
      <Inscription />
      <Tickets />
      <FAQ />
      {/* <PlanAcces /> */}
      <Contact />
      {/* <Sponsors /> */}
    </>
  );
}
