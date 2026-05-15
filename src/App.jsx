import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Navigation/Home';
import About from './components/Navigation/About';
import Questions from './components/Navigation/Questions';
import Contact from './components/Navigation/Contact';
import Tutorials from './components/Navigation/Tutorials';
import Exercises from './components/Navigation/Exercises';
import './components/Navigation/pages.css';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className="app">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="app-content">
        {currentPage === 'home' && <Home onNavigate={setCurrentPage} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'questions' && (
          <Questions selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
        )}
        {currentPage === 'tutorials' && <Tutorials />}
        {currentPage === 'exercises' && (
          <Exercises selectedTopic={selectedTopic} setSelectedTopic={setSelectedTopic} />
        )}
        {currentPage === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
