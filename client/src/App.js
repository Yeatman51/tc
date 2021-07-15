import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Tech from './pages/Tech.js';
import Designs from './pages/Designs.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App background-img">
      

      <Header/>

      <Router>
      <Navbar/>
          <Route exact path="/" component={Home} />
          <Route exact path="/Tech" component={Tech} />
          <Route exact path="/Designs" component={Designs} />
          <Route exact path="/About" component={About} />  
          <Route exact path="/Contact" component={Contact} />  
      </Router>

      <Footer/>
      

      
    </div>
  );
}

export default App;