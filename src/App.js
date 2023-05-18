import React from 'react'
import './sass/main.scss'
import Header from './jsx/components/Header';
import Internet from './jsx/components/Internet';
import Innovation from './jsx/components/Innovation';
import Globalcoverage from './jsx/components/Globalcoverage';
import Looking from './jsx/components/Looking';
import Security from './jsx/components/Security';
import Usedin from './jsx/components/Usedin';
import Readyjoin from './jsx/components/Readyjoin';
import Footer from './jsx/components/Footer';




function App() {
  return (
    <div className="App">
      <Header />
      <Internet />
      <Innovation />
      <Globalcoverage />
      <Looking />
      <Security />
      <Usedin />
      <Readyjoin />
      <Footer />
    </div>
  );
}

export default App;
