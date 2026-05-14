import React from 'react';
import Part1 from '../parts/part1';
import Part2 from '../parts/part2';
import Part3 from '../parts/part3';
import Part4 from '../parts/part4';
import CodeCard from '../CodeCard/CodeCard';

const topicQuestions = {
  html: [
    {
      id: 'html-1',
      question: '1. Build a simple HTML page structure with a header, main, and footer.',
      answer: 'Use semantic tags like <header>, <main>, and <footer> to organize the document.',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Simple Page</title>
</head>
<body>
  <header>
    <h1>My Site</h1>
  </header>
  <main>
    <p>Welcome to the sample page.</p>
  </main>
  <footer>
    <p>© 2026 Example</p>
  </footer>
</body>
</html>`,
      bgColor: 'rgb(255, 234, 167)'
    },
    {
      id: 'html-2',
      question: '2. Create a form with a text input and a submit button.',
      answer: 'Use <form>, <label>, <input>, and <button> to build accessible HTML forms.',
      code: `<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input id="name" name="name" type="text" placeholder="Enter your name" />
  <button type="submit">Send</button>
</form>`,
      bgColor: 'rgb(204, 229, 255)'
    }
  ],
  css: [
    {
      id: 'css-1',
      question: '1. Create a flex container with centered items.',
      answer: 'Use display: flex; justify-content: center; align-items: center; for centering.',
      code: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}`,
      bgColor: 'rgb(208, 222, 255)'
    },
    {
      id: 'css-2',
      question: '2. Build a responsive two-column grid layout.',
      answer: 'Use CSS Grid and auto-fit/minmax to adapt columns to viewport width.',
      code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}`,
      bgColor: 'rgb(255, 209, 217)'
    }
  ],
  javascript: [
    {
      id: 'js-1',
      question: '1. Write a JavaScript function to reverse a string.',
      answer: 'Split the string into an array, reverse it, and join it back again.',
      code: `function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString('Hello'));`,
      bgColor: 'rgb(156, 156, 245)'
    },
    {
      id: 'js-2',
      question: '2. Write a JavaScript function to check if a string is a palindrome.',
      answer: 'Compare the input string against its reversed version.',
      code: `function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}
console.log(isPalindrome('BAB'));`,
      bgColor: 'rgb(156, 245, 215)'
    }
  ],
  react: [
    {
      id: 'react-1',
      question: '1. Create a basic useState counter component.',
      answer: 'useState stores count and buttons update it with setCount.',
      code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;`,
      bgColor: 'rgb(147, 178, 68)'
    },
    {
      id: 'react-2',
      question: '2. Render a list of items from props in React.',
      answer: 'Map over props.items and return a unique-keyed list item for each.',
      code: `function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default ItemList;`,
      bgColor: 'rgb(186, 232, 255)'
    }
  ]
};

const topicData = {
  html: {
    label: 'HTML Concepts',
    items: [
      'Document Structure — <!DOCTYPE>, <html>, <head>, <body>, meta tags',
      'Text Elements — Headings, paragraphs, spans, strong, em, blockquote',
      'Lists — Ordered, unordered, description lists',
      'Forms — <form>, <input>, <button>'
    ]
  },
  css: {
    label: 'CSS Concepts',
    items: [
      'Flexbox — justify-content, align-items, flex-direction',
      'Grid — grid-template-columns, gap, auto-fit/minmax',
      'Responsive styles — media queries and fluid layout',
      'Hover states and transitions'
    ]
  },
  javascript: {
    label: 'JavaScript Concepts',
    items: [
      'Functions, arrays, and string manipulation',
      'Control flow with if, loops, and switch',
      'Higher-order functions and closures',
      'Async basics and data handling'
    ]
  },
  react: {
    label: 'React Concepts',
    items: [
      'useState and local component state',
      'Props and component composition',
      'Conditional rendering and lists',
      'Component structure and reusable UI'
    ]
  }
};

export default function Questions({ selectedTopic, setSelectedTopic }) {
  const selected = selectedTopic ? topicData[selectedTopic] : null;
  const selectTopic = (topic) => setSelectedTopic(topic);

  return (
    <>
      <section className="page-section questions-page">
        <h1>Practice Questions</h1>
        <p>Select a topic card below to view related concepts and code challenges.</p>
      </section>

      <div className="parts-row">
        <Part1 onShowConcept={() => selectTopic('html')} />
        <Part2 onShowConcept={() => selectTopic('css')} />
        <Part3 onShowConcept={() => selectTopic('javascript')} />
        <Part4 onShowConcept={() => selectTopic('react')} />
      </div>

      <div className="concept-details" data-topic={selectedTopic}>
        {selected ? (
          <>
            <h2>{selected.label}</h2>
            <ul>
              {selected.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : (
          <p>Select a topic card to view related concepts.</p>
        )}
      </div>

      {selectedTopic && (
        <>
          <div className="questions-header" data-topic={selectedTopic}>
            <h2>{selected?.label.split(' ')[0]} Practice Questions</h2>
          </div>
          <div className="questions-container">
            {topicQuestions[selectedTopic].map((q) => (
              <CodeCard
                key={q.id}
                id={q.id}
                question={q.question}
                answer={q.answer}
                code={q.code}
                bgColor={q.bgColor}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
