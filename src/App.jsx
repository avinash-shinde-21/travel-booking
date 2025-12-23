import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import Contact from './pages/Contact'
import { destinationsData } from './Mock_DATA/destinationData';

const App = () => {
  return (
      <div className="font-sans antialiased text-neutral-200 bg-neutral-950 selection:bg-emerald-500 selection:text-white">
        <Navbar />

        <main>
          <Routes>
            <Route
              path="/"
              element={<Home destinations={destinationsData} />}
            />
            <Route
              path="/destinations"
              element={<Destinations destinations={destinationsData} />}
            />
            <Route
              path="/packages"
              element={<Packages />}
            />
            <Route
              path="/contact"
              element={<Contact />}
            /> 
          </Routes>
        </main>

        <Footer />
      </div>
    
  );
};

export default App;
