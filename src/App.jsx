import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Navigation/Home';
import About from './components/Navigation/About';
import Questions from './components/Navigation/Questions';
import Contact from './components/Navigation/Contact';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="app-content">
        {currentPage === 'home' && <Home />}
        {currentPage === 'about' && <About />}
        {currentPage === 'questions' && (
          <Questions selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
        )}
        {currentPage === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
