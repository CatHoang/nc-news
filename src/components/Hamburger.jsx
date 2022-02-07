import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hamburger">
      <div className="hamburger-icon">
        {isOpen ? (
          <button onClick={() => setIsOpen(!isOpen)}>Close</button>
        ) : (
          <button onClick={() => setIsOpen(!isOpen)}>Open</button>
        )}
      </div>

      {isOpen && (
        <div className="nav-content">
          <Link key="cooking" to={`/topics/cooking`}>
            Cooking
          </Link>
          <Link key="coding" to={`/topics/coding`}>
            Coding
          </Link>
          <Link key="football" to={`/topics/football`}>
            Football
          </Link>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
