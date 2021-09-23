import Header from 'components/Header';
import Campaigns from 'components/Campaigns';
import Cards from 'components/Cards';
import Categories from 'components/Categories';
import Favorites from 'components/Favorites';
import Footer from 'components/Footer';
import MobileApp from 'components/MobileApp';
import React from 'react'
import './style.css'
import Carousel from 'components/Carousel';

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <Categories />
      <Campaigns />
      <Favorites />
      <MobileApp />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
