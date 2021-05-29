import React from 'react';
import { render } from 'react-dom';
import Joke from './Joke/Joke';
import './style.css';

const App = () => (

  <div className="container">
    
     <Joke />
    
  </div>
 );


render(<App />, document.querySelector('#app'));
