import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
     <div className="App">
        <Navbar />
        <div className="component">
          <Route exact path="/">
            <Home />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
