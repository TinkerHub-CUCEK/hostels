import React from 'react';
import './CatCard.css';
import gent from '../media/images/gn.png'
import icon from '../media/icons/icon.png'

const CatCard = () => {
  return <div className='root'>
    <div className='card'>
        <img src={gent}></img>
        <div className='card-bottom'>
            <p>Gents</p>
            <img src={icon}></img>
        </div>
    </div>
    
  </div>;
};

export default CatCard;
