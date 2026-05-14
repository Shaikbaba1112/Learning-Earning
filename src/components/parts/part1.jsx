import React from 'react';
import './parts.css';

export default function part1({ onShowConcept }) {
  return (
    <div className='part'>
      <h1 className='card-heading'>HTML</h1>
      <ul className='concept-list'>
        <li>HTML tags and semantic structure.</li>
        <li>Forms and inputs.</li>
        <li>Links, images, and lists.</li>
        <li>Accessibility and sectioning.</li>
      </ul>
          <button className='card-btn' type='button' onClick={onShowConcept}>Go Depth</button>
    </div>
  );
}
