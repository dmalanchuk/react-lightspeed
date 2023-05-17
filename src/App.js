import React from 'react'
import './sass/main.scss'
import Header from './jsx/components/Header';
import Internet from './jsx/components/Internet';
import Innovation from './jsx/components/Innovation';
import Globalcoverage from './jsx/components/Globalcoverage';



function App() {
  return (
    <div className="App">
      <Header />
      <Internet />
      <Innovation /> 
      <Globalcoverage / >
    </div>
  );
}

export default App;
