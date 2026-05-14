import React from 'react';
import './parts.css';

export default function part4({ onShowConcept }) {
  return (
    <div className='part'>
         <h1 className='card-heading'>React.JS</h1>         
      <ul className='concept-list'>
        <li>Components and props.</li>
        <li>State and lifecycle.</li>
        <li>Event handling and forms.</li>
        <li>Routing and navigation.</li>
      </ul>
        <button className='card-btn' type='button' onClick={onShowConcept}>Go Depth</button>
    </div>
  );
}
