import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Navbar from './components/Navbar'
import BrowserCursor from './components/BrowserCursor';
import Drop from './components/Drop';
import Contact from './pages/contact';
import Footer from './components/Footer';
function App() {
  return (
    <Router>
     <div className="App">
        <Navbar />
        <BrowserCursor />
        <div className="component">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/faqs">
            <FAQs />
          </Route>
          {/* parts that are commented should remain so */}
          {/* <Drop /> */}
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
