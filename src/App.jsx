// Bringing in the required import from 'react-router-dom'
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <NavTabs />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
