import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { PolitiqueConfidentialite } from './pages/PolitiqueConfidentialite';
import { MentionsLegales } from './pages/MentionsLegales';
import { Planning } from './pages/Planning';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/politique-de-confidentialite" element={<PolitiqueConfidentialite />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/planning" element={<Planning />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
