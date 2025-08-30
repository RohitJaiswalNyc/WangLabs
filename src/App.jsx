import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'
import PeoplesPage from './PeoplesPage'
import DattatriSawantPage from './IndividualMember';
import Publications from './Publications';
import Research from './Research';
import CollaborationsPage from './CollaborationsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <GradientBar /> */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/people" element={<PeoplesPage />} />
        <Route path="/people/*" element={<DattatriSawantPage/>} />
        <Route path="/publication" element={<Publications/>} />
        <Route path="/research" element={<Research />} />
        <Route path="/collaborations" element={<CollaborationsPage />} />
        <Route path="/media" element={<HomePage />} />
        {/* <Footer/> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
