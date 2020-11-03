import React from 'react';
import HeroSlider from '../components/HeroSlider/HeroSlider'
import Feature from '../components/Features/Feature'
import Intro from '../components/Intro/Intro'
import Design from '../components/Features/Design'
import Action from '../components/Features/Action'

const Home = () => {
  return (
<><HeroSlider />
<Feature />
<Intro />
<Design />
<Action />
</>

  );
}

export default Home;