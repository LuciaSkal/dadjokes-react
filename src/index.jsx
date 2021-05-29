import React from 'react';
import { render } from 'react-dom';
import Joke from './Joke/Joke';
import { jokes } from './jokes';
import './style.css';


const App = () => {

  return (
     <>
     <h1>Jokes 😂</h1>
     {jokes.map((joke) => 
     <Joke avatar={joke.avatar}
           name={joke.name}  
           text={joke.text} 
           likes={joke.likes}
           dislikes={joke.dislikes}
           key={joke.id}
     />
     )};
    </>
  )
};

render(<App />, document.querySelector('#app'));
