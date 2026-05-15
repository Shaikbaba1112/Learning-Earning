import React from 'react';
import Hero from '../Hero/Hero';
import './Home.css';

export default function Home({ onNavigate }) {
  return (
    <div className="home-page">
      <Hero />

      <section className="home-intro">
        <div className="home-copy">
          <span className="eyebrow">Learn. Practice. Earn.</span>
          <h1>Build your skills with bite-sized tutorials and real coding challenges.</h1>
          <p>
            Discover structured lessons, interactive examples, and quizzes designed to help you learn web
            development faster while earning progress and confidence.
          </p>
          <div className="home-actions">
            <button type="button" className="button primary" onClick={() => onNavigate('questions')}>
              Start Learning
            </button>
            <button type="button" className="button secondary" onClick={() => onNavigate('about')}>
              Explore Tutorials
            </button>
          </div>
        </div>

        <div className="home-stats">
          <article>
            <strong>120+</strong>
            <span>Lessons</span>
          </article>
          <article>
            <strong>4</strong>
            <span>Main Topics</span>
          </article>
          <article>
            <strong>200+</strong>
            <span>Practice Questions</span>
          </article>
        </div>
      </section>

      <section className="home-features">
        <h2>What you can do here</h2>
        <div className="feature-grid">
          <article className="feature-card">
            <h3>Interactive tutorials</h3>
            <p>Step through examples in HTML, CSS, JavaScript, and React with instant code feedback.</p>
          </article>
          <article className="feature-card">
            <h3>Hands-on exercises</h3>
            <p>Practice every concept with quizzes and real-project style challenges to solidify your skills.</p>
          </article>
          <article className="feature-card">
            <h3>Track progress</h3>
            <p>Watch your learning journey grow as you complete lessons and improve your code mastery.</p>
          </article>
        </div>
      </section>

      <section className="home-categories">
        <h2>Topics you'll master</h2>
        <div className="topic-grid">
          <article className="topic-card html">HTML Fundamentals</article>
          <article className="topic-card css">CSS Styling</article>
          <article className="topic-card js">JavaScript Logic</article>
          <article className="topic-card react">React Components</article>
        </div>
      </section>
    </div>
  );
}
