import React from 'react';
import './Home.css';
import bg from '../media/images/bgnd.png';
import CatCard from '../components/CatCard';


const Home = () => {
  return <div className='root'>
    <img src={bg} className='image' />
    <CatCard />
  </div>;
};

export default Home;
