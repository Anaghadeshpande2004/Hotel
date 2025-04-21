import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderFooter from './Components/HeaderFooter';
import Page4 from './Components/Page4'; // Fix the import here
import Page2 from './Components/Page2'; // Fix the import here
import Page3 from './Components/Page3';
import Page1 from './Components/Page1'; 
const Home = () => <h2 style={{ textAlign: 'center', marginTop: '80px' }}>Welcome to StayEaze</h2>;

function App() {
  return (
    <Router>
      <HeaderFooter />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/checkin" element={<Page1/>} /> {/* Fix reference here */}
       <Route path="/page2" element={<Page2/>} /> {/* Fix reference here */}
       <Route path="/page3" element={<Page3 />} />
       <Route path="/page4" element={<Page4 />} />
      </Routes>
    </Router>
  );
}

export default App;
