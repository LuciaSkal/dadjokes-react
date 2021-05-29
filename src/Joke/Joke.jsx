import React from 'react';
import './style.css';
import { useState } from 'react';



const Joke = ({avatar, name, text, likes, dislikes}) => {
  
  const [pocetKlikuLike, setPocetKlikuLike] = useState(likes);
  const [pocetKlikuDislike, setPocetKlikuDislike] = useState(dislikes);

  const handleSelectLike = () => {
    setPocetKlikuLike(pocetKlikuLike + 1);
  };
  
  const handleSelectDislike = () => {
    setPocetKlikuDislike(pocetKlikuDislike + 1);
  };

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={avatar} />
            <p className="user-name">{name}</p>
          </div>
            <p className="joke__text">{text} </p>
        </div>
        <div className="joke__likes">
          <button id="btn-up" className="btn-like btn-like--up" onClick={handleSelectLike}></button>
          <span id="likes-up" className="likes-count likes-count--up">{pocetKlikuLike}</span>
          <button id="btn-down" className="btn-like btn-like--down" onClick={handleSelectDislike}></button>
          <span id="likes-down" className="likes-count likes-count--down">{pocetKlikuDislike}</span>
        </div>
      </div>
    </div>
  )
};

export default Joke;