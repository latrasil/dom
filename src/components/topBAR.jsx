import React, { useState } from 'react';
import '../styles/topBAR.css'



const Top = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };
    return (
        <div className="navbar">
        <div className="centered">
          <button>Botón 1</button>
          <button>Botón 2</button>
          <button>Botón 3</button>
          <button>Botón 4</button>
          <button onClick={toggleDropdown}>Botón 5</button>
          {isDropdownVisible && (
            <div className="dropdown">
              <button>Botón 6</button>
              <button>Botón 7</button>
              <button>Botón 8</button>
              <button>Botón 9</button>
              <button>Botón 10</button>
            </div>
          )}
        </div>
      </div>
    )
  }
  
  export default Top;