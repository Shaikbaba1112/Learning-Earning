import React from 'react';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="logo">#42</div>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Questions</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}
