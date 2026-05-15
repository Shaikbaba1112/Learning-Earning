import React from 'react';
import Questions from './Questions';

export default function Exercises({ selectedTopic, setSelectedTopic }) {
  return (
    <div style={{paddingTop: 8}}>
      <Questions selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
    </div>
  );
}
