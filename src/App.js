import React from 'react';
import Header from './components/Header';
import CabinList from './components/Cabinlist';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <CabinList />
      <Footer />
    </div>
  );
}

export default App;
