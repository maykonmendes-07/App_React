import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contacts'
import Newproject from './components/pages/Newproject'

import Container from './components/Layout/Container'
import NavBar from './components/Layout/NavBar'
import Footer from './components/Layout/Footer'
import Projects from './components/pages/Projects'


function App() {
  return (
    <Container customClass="minheight" >
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Company" element={<Company />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Newproject" element={<Newproject />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer/>
    </Router>
    </Container>

  );
}

export default App;
