import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import HomePage from './pages/HomePage';
import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';
import ThirdPage from './pages/ThirdPage';
import FourthPage from './pages/FourthPage';
import TirthankaraDetailPage from './pages/subpages/TirthankaraDetailPage';
import Stotra from './pages/subpages/Stotra';
import Aarti from './pages/otherpages/aarti';
import Bhajan from './pages/otherpages/bhajan-bhakti';
import Common from './pages/otherpages/commonpage';
import AartiDetails from './pages/subpages/AartiDetails';
import BhajanDetails from './pages/subpages/BhajanDetails';
import PadhDetais from './pages/subpages/PadhDetails';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading page after 2 seconds
    }, 2000); // Set the delay here (2 seconds)

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/firstpage" element={<FirstPage />} />
            <Route path="/secondpage" element={<SecondPage />} />
            <Route path="/thirdpage" element={<ThirdPage />} />
            <Route path="/fourthpage" element={<FourthPage />} />
            <Route path="/tirthankara/:id" element={<TirthankaraDetailPage />} />
            <Route path="/stotra/:id" element={<Stotra />} />
            <Route path="/aarti" element={<Aarti />} />
            <Route path="/bhajan-bhakti" element={<Bhajan />} />
            <Route path="/commonpage/:id" element={<Common />} />
            <Route path="/aarti/:id" element={<AartiDetails />} />
            <Route path="/bhajan/:id" element={<BhajanDetails />} />
            <Route path="/padh/:id" element={<PadhDetais />} />

            {/* Catch-all route for unknown paths */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
};

export default App;
