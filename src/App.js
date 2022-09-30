import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
  const navigate = useNavigate();

  const handlePageChange = (currentPage) => {
    navigate(currentPage);
  };

  return (
    <div className="App">
      <header className="App-header">
        HOOKS CONCEPTS
      </header>

      <div className='box-wrapper'>
        <div className='box' onClick={() => handlePageChange('/normalHooks')}>Normal Hooks</div>
        <div className='box' onClick={() => handlePageChange('/rooksHooks')}>Rooks package Hooks</div>
      </div>
    </div>
  );
}

export default App;
