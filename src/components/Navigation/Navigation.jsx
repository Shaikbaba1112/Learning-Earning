import React from 'react';
import './Navigation.css';

export default function Navigation({ currentPage, onNavigate }) {
  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Questions', page: 'questions' },
    { label: 'Contact', page: 'contact' }
  ];

  return (
    <nav className="nav">
      <div className="logo">#42</div>
      <ul>
        {navItems.map((item) => (
          <li key={item.page} className={currentPage === item.page ? 'active' : ''}>
            <a
              href={`#${item.page}`}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item.page);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
