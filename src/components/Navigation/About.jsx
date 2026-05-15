import React from 'react';
import './pages.css';

export default function About() {
  return (
    <section className="page-section about-page">
      <div className="page-hero">
        <div>
          <h1>About Learning‑Earning</h1>
          <p className="lead">A focused practice platform for web developers — concise tutorials, real exercises, and progress tracking.</p>
        </div>
      </div>

      <div className="cards-grid">
        <div className="card">
          <h3>Our Mission</h3>
          <p className="muted">Help developers build practical skills with short, structured lessons and immediate feedback.</p>
        </div>

        <div className="card">
          <h3>What we offer</h3>
          <ul>
            <li>Curated tutorials and bite-sized lessons</li>
            <li>Hands-on exercises with code samples</li>
            <li>Progress tracking and badges</li>
          </ul>
        </div>

        <div className="card">
          <h3>Community Focus</h3>
          <p className="muted">Open suggestions and contributions via GitHub — we evolve content based on user feedback.</p>
        </div>
      </div>
    </section>
  );
}
