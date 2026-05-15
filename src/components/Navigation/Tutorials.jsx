import React, { useState } from 'react';
import './pages.css';

const sampleTutorials = [
  { id: 't1', title: 'HTML Basics', tags: ['HTML', 'Beginner'], duration: '15m' },
  { id: 't2', title: 'CSS Layouts: Flex & Grid', tags: ['CSS', 'Intermediate'], duration: '22m' },
  { id: 't3', title: 'JavaScript Essentials', tags: ['JavaScript', 'Beginner'], duration: '30m' },
  { id: 't4', title: 'React: Functional Components', tags: ['React', 'Intermediate'], duration: '28m' }
];

export default function Tutorials() {
  const [query, setQuery] = useState('');
  const [tag, setTag] = useState('All');

  const tags = ['All', 'Beginner', 'Intermediate', 'HTML', 'CSS', 'JavaScript', 'React'];

  const filtered = sampleTutorials.filter((t) => {
    const matchesQuery = t.title.toLowerCase().includes(query.toLowerCase());
    const matchesTag = tag === 'All' || t.tags.includes(tag);
    return matchesQuery && matchesTag;
  });

  return (
    <section className="page-section tutorials-page">
      <div className="page-hero">
        <div>
          <h1>Tutorials</h1>
          <p className="lead">Follow concise, hands-on tutorials designed to teach specific skills quickly.</p>
        </div>
      </div>

      <div style={{marginTop: 12}}>
        <div className="tutorial-search">
          <input className="input" placeholder="Search tutorials" value={query} onChange={(e) => setQuery(e.target.value)} />
          <select className="select" value={tag} onChange={(e) => setTag(e.target.value)}>
            {tags.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        <div className="cards-grid">
          {filtered.map((t) => (
            <article className="tutorial-card" key={t.id}>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h3 style={{margin: 0}}>{t.title}</h3>
                <span className="muted">{t.duration}</span>
              </div>
              <div style={{marginTop: 8}}>
                {t.tags.map((tg) => <span className="tag" key={tg}>{tg}</span>)}
              </div>
              <p className="muted" style={{marginTop: 12}}>Short description that previews what you’ll learn in this tutorial.</p>
              <div style={{marginTop: 12}}>
                <button className="btn-primary">Start Tutorial</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
