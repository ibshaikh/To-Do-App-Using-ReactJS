// components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>TO-DO LIST WEB APP</h1>
      <nav>
        <a href="/NoteKeeper">Note Keeper</a>
      </nav>
      <div className="toggle">
        <label>
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
