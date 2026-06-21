import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { PolitiqueConfidentialite } from './pages/PolitiqueConfidentialite';
import { MentionsLegales } from './pages/MentionsLegales';
import { Maintenance } from './pages/Maintenance';
import { NotFound } from './pages/NotFound';

const MAINTENANCE = import.meta.env.VITE_MAINTENANCE === 'true';

function App() {
  if (MAINTENANCE) return <Maintenance />;

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
