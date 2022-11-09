import React from 'react';
import '../global.css';

const Header = ({ setIsAdding }) => {
  return (
    <header>
      <div>
        <button onClick={() => setIsAdding(true)} className='header-button'>
          Add Button
        </button>
      </div>
    </header>
  );
};

export default Header;
