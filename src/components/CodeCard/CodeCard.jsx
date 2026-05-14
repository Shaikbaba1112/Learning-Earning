import React, { useState } from 'react';
import './CodeCard.css';

export default function CodeCard({ id, question, answer, code, bgColor }) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="code-card" style={{ backgroundColor: bgColor }}>
      <h2>{question}</h2>
      <p>
        Example:
        <button 
          className="code-btn"
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? 'Hide Answer' : 'Show Answer'}
        </button>
      </p>
      {showCode && (
        <>
          <div className="answer-block">
            <strong>Answer:</strong>
            <p>{answer}</p>
          </div>
          <pre className="code-block">
            {code}
          </pre>
        </>
      )}
    </div>
  );
}
