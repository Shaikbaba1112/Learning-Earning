import React from 'react';
import Hero from '../Hero/Hero';

export default function Home() {
  return (
    <>
      <Hero />
      <section className="page-section home-page">
        <h1>Welcome to Learning-Earning</h1>
        <p>
          Practice HTML, CSS, JavaScript, and React with guided code examples and interactive questions.
        </p>
      </section>
    </>
  );
}
