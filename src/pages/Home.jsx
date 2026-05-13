import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Divisions } from '../components/sections/Divisions';
import { Schedule } from '../components/sections/Schedule';
import { Tickets } from '../components/sections/Tickets';
import { Gallery } from '../components/sections/Gallery';
import { Sponsors } from '../components/sections/Sponsors';
import { FAQ } from '../components/sections/FAQ';
import { Recompenses } from '../components/sections/Recompenses';
import { Contact } from '../components/sections/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Recompenses />
      <Schedule />
      <Divisions />
      <Tickets />
      <FAQ />
      <Contact />
      <Sponsors />
    </>
  );
}
