import React from 'react';
import './parts.css';

export default function part2({ onShowConcept }) {
  return (
    <div className='part'>
       <h1 className='card-heading'>CSS</h1>     
       <ul className='concept-list'>
        <li>CSS selectors and specificity.</li>
        <li>Box model and layout techniques.</li>
        <li>Responsive design and media queries.</li>
        <li>Typography and styling best practices.</li>
      </ul>
          <button className='card-btn' type='button' onClick={onShowConcept}>Go Depth</button>
    </div>
  );
}
