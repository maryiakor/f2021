import React from 'react';
import './App.css';
import NavBar from './NavBar';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container">
        <AppRoutes/>
      </div>
    </div>
  );
}

export default App;
