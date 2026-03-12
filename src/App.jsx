import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage.jsx'
import PeoplesPage from './People/PeoplesPage.jsx'
import DattatriSawantPage from './IndividualMember/IndividualMember.jsx';
import Publications from './Publication/Publications.jsx';
import Research from './Research/Research.jsx';
import News from './News/News.jsx';
import JoinUs from './JoinUs/JoinUs.jsx';

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
        <Route path="/news" element={<News/>} />
        <Route path="/JoinUs" element={<JoinUs />} />
        {/* <Footer/> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
