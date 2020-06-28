import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import {Route} from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div >
      <switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/Hats' component={HatsPage} />
      </switch>
    </div>
  );
}

export default App;
