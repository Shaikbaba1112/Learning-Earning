import React from 'react';
import './parts.css';

export default function part3({ onShowConcept }) {
  return (
    <div className='part'>
       <h1 className='card-heading'>JavaScript</h1>       
       <ul className='concept-list'>
        <li>Variables and data types.</li>
        <li>Functions and scope.</li>
        <li>Objects and arrays.</li>
        <li>DOM manipulation and events.</li>
      </ul>
          <button className='card-btn' type='button' onClick={onShowConcept}>Go Depth</button>
    </div>
  );
}
