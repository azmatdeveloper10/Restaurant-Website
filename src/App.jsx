import React from 'react';
import Navbar from './component/Navbar';
import Header from './component/Header';
import AboutUs from './component/AboutUs';
import Menu from './component/Menu';
import Chef from './component/Chef';
import Intro from './component/Intro';
import Awards from './component/Awards';
import Gallery from './component/Gallery';
import Findus from './component/Findus';
import Footer from './component/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Menu />
      <Chef />
      <Intro />
      <Awards />
      <Findus />
      <Footer />
    </div>
  );
};

export default App;
