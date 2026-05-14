import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Part1 from './components/parts/part1';
import Part2 from './components/parts/part2';
import Part3 from './components/parts/part3';
import Part4 from './components/parts/part4';
import CodeCard from './components/CodeCard/CodeCard';
import './App.css';

function App() {
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
            },
            {
                id: 'html-3',
                question: '3. Add an image and a list of links.',
                answer: 'Use <img> with alt text and a list of anchor tags for navigation.',
                code: `<img src="/logo.png" alt="Site logo" />
<ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
</ul>`,
                bgColor: 'rgb(221, 255, 221)'
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
            },
            {
                id: 'css-3',
                question: '3. Style a button hover state.',
                answer: 'Use the :hover pseudo-class to change the appearance on hover.',
                code: `button {
    background-color: #4a90e2;
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 8px;
}
button:hover {
    background-color: #357ab8;
}`,
                bgColor: 'rgb(226, 255, 212)'
            }
        ],
        javascript: [
            {
                id: 'js-1',
                question: '1. Write a JavaScript function to reverse a string.',
                answer: 'Split the string into an array, reverse it, and join it back again.',
                code: `function reverseString(str){
    return str.split('').reverse().join('');
}
console.log(reverseString('Hello'));`,
                bgColor: 'rgb(156, 156, 245)'
            },
            {
                id: 'js-2',
                question: '2. Write a JavaScript function to check if a string is a palindrome.',
                answer: 'Compare the input string against its reversed version.',
                code: `function isPalindrome(str){
    return str === str.split('').reverse().join('');
}
console.log(isPalindrome('BAB'));`,
                bgColor: 'rgb(156, 245, 215)'
            },
            {
                id: 'js-3',
                question: '3. Write a JavaScript function to check if a number is prime.',
                answer: 'Loop from 2 to n-1 and return false if any divisor exists.',
                code: `function isPrime(num){
    if(num <= 1) return false;
    for(let i = 2; i < num; i++){
        if(num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));`,
                bgColor: 'rgb(218, 192, 192)'
            },
            {
                id: 'js-4',
                question: '4. Write a JavaScript function to calculate a factorial.',
                answer: 'Multiply all integers from 1 to n to compute the factorial.',
                code: `function factorial(n){
    let result = 1;
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5));`,
                bgColor: 'aqua'
            },
            {
                id: 'js-5',
                question: '5. Write a JavaScript function to remove duplicates from an array.',
                answer: 'Use a Set to eliminate duplicate values and convert it back to an array.',
                code: `function removeDuplicates(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3,4,4]));`,
                bgColor: 'rgb(244, 131, 150)'
            },
            {
                id: 'js-6',
                question: '6. Write a JavaScript function to find the largest number in an array.',
                answer: 'Use Math.max with the spread operator to return the highest value.',
                code: `function largestNum(arr){
    return Math.max(...arr);
}
console.log(largestNum([1,2,3,4,5]));`,
                bgColor: 'rgb(118, 222, 156)'
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
            },
            {
                id: 'react-3',
                question: '3. Load data with useEffect and fetch.',
                answer: 'Use useEffect with an empty dependency array to fetch once on mount.',
                code: `import React, { useEffect, useState } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://api.example.com/data')
            .then((response) => response.json())
            .then((json) => setData(json));
    }, []);

    return <div>{JSON.stringify(data)}</div>;
}

export default DataFetcher;`,
                bgColor: 'rgb(245, 234, 156)'
            }
        ]
    };

    const [selectedTopic, setSelectedTopic] = useState(null);

    const topicData = {
        html: {
            label: 'HTML Concepts',
            items: [
                'Document Structure — <!DOCTYPE>, <html>, <head>, <body>, meta tags',
                'Text Elements — Headings, paragraphs, spans, strong, em, blockquote',
                'Lists — Ordered, unordered, description lists',
                'Hyperlinks — <a> tag, href, target, relative vs absolute paths',
                'Images — <img>, alt text, srcset for responsive images',
                'Audio & Video — <audio>, <video>, controls, formats, fallbacks',
                'Semantic HTML5 Elements — <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>',
                'Div & Span — Generic containers, block vs inline',
                'Tables — <table>, <thead>, <tbody>, <tr>, <td>, <th>, colspan/rowspan',
                'Form Basics — <form>, action, method',
                'Input Types — text, email, password, number, date, checkbox, radio, file, range',
                'Form Elements — <label>, <select>, <textarea>, <button>, <fieldset>',
                'Form Validation — required, min/max, pattern attributes',
                'HTML Attributes — class, id, data-*, style, tabindex, contenteditable',
                'Accessibility (a11y) — ARIA roles & attributes, screen reader support, landmark roles',
                'SEO Basics — Meta description, Open Graph tags, canonical links, heading hierarchy',
                'Iframes — Embedding external content, sandbox attribute',
                'Canvas & SVG — Basic inline graphics and drawing APIs',
                'Resource Loading — <link>, <script> placement, defer vs async',
                'Responsive Design Basics — Viewport meta tag, responsive images',
                'Character Encoding — UTF-8, special characters/entities (&amp;, &nbsp;)',
                'HTML Validation — Writing well-structured, error-free markup',
                'Browser DevTools — Inspecting and debugging HTML',
                'Templating concepts — Understanding how HTML integrates with frameworks (React JSX, etc.)',
                'Version Control — Managing HTML files with Git'
            ]
        },
        css: {
            label: 'CSS Concepts',
            items: [
                'Syntax & Selectors — element, class, id, attribute, pseudo-class, pseudo-element',
                'Specificity & Cascade — How styles override each other, specificity scoring',
                'Inheritance — Which properties inherit and which don\'t',
                'The Box Model — margin, border, padding, content, box-sizing',
                'Color Formats — hex, rgb, rgba, hsl, hsla, named colors',
                'Typography — font-family, font-size, font-weight, line-height, letter-spacing, text-transform',
                'Web Fonts — Google Fonts, @font-face, variable fonts',
                'Text Styling — text-decoration, text-align, text-shadow, white-space, overflow',
                'Display Property — block, inline, inline-block, none',
                'Flexbox — flex-direction, justify-content, align-items, flex-wrap, gap',
                'CSS Grid — grid-template-columns/rows, grid-area, fr unit, auto-fit, minmax()',
                'Positioning — static, relative, absolute, fixed, sticky, z-index',
                'Float & Clear (legacy) — float-based layouts, clearfix',
                'Media Queries — @media, breakpoints, mobile-first approach',
                'Fluid Layouts — percentages, min/max-width, clamp()',
                'Responsive Units — em, rem, vw, vh, vmin, vmax',
                'Responsive Images — object-fit, object-position',
                'Container Queries — @container (modern approach)',
                'Backgrounds — background-color, background-image, background-size, background-position, gradients',
                'Borders & Shadows — border-radius, box-shadow, text-shadow',
                'Opacity & Visibility — opacity, visibility, display: none',
                'Overflow — overflow, overflow-x/y, scroll, clip',
                'Filters & Blend Modes — filter, backdrop-filter, mix-blend-mode',
                'Transitions — transition, transition-duration, transition-timing-function, ease',
                'Keyframe Animations — @keyframes, animation-name, animation-duration, animation-iteration-count',
                'Transform — translate, scale, rotate, skew, perspective',
                'CSS Motion Path — offset-path for moving elements along paths',
                'Custom Properties (Variables) — --variable-name, var(), :root scope',
                'CSS Functions — calc(), clamp(), min(), max(), env()',
                'Logical Properties — margin-inline, padding-block (for RTL support)',
                'Pseudo-classes — :focus, :checked, :disabled, :not(), :is(), :where()',
                'CSS Nesting — Native nesting (modern browsers)',
                '@layer — Cascade layers for managing specificity',
                '@supports — Feature detection in CSS',
                'Scroll Behavior — scroll-snap, scroll-behavior: smooth, overscroll-behavior',
                'Naming Conventions — BEM (Block Element Modifier), SMACSS, OOCSS',
                'CSS Reset & Normalize — Removing browser default inconsistencies',
                'CSS Preprocessors — SASS/SCSS (variables, mixins, nesting, partials)',
                'CSS-in-JS — Styled Components, Emotion',
                'Utility-First CSS — Tailwind CSS fundamentals',
                'Performance — Minimizing repaints/reflows, critical CSS, will-change',
                'Browser DevTools — Inspecting, editing, and debugging CSS live',
                'Linting — Stylelint for consistent code',
                'PostCSS — Autoprefixer, future CSS features today',
                'CSS Modules — Scoped styles in component-based apps'
            ]
        },
        javascript: {
            label: 'JavaScript Concepts',
            items: [
                'Syntax & Basics — Variables (var, let, const), data types, operators, comments',
                'Control Flow — if/else, switch, ternary operator, for, while, do...while',
                'Functions — Function declarations, expressions, arrow functions, default parameters, rest parameters',
                'Scope — Global, local, block scope, hoisting, temporal dead zone',
                'Type Coercion — Implicit vs explicit conversion, == vs ===, truthy/falsy values',
                'Arrays — map(), filter(), reduce(), forEach(), find(), flat(), splice(), slice()',
                'Objects — Properties, methods, this, shorthand, computed properties',
                'Strings — Template literals, string methods (split, trim, includes, replace)',
                'Numbers — Math object, parseInt, parseFloat, NaN, Infinity',
                'Sets & Maps — Set, Map, WeakSet, WeakMap',
                'Destructuring — Array & object destructuring, nested destructuring',
                'Spread & Rest — ... operator in arrays, objects, and functions',
                'Higher-Order Functions — Functions that take/return other functions',
                'Closures — Lexical scope, data privacy, function factories',
                'Callbacks — Passing functions as arguments',
                'IIFE — Immediately Invoked Function Expressions',
                'Pure Functions — No side effects, predictable output',
                'Currying & Composition — Functional programming patterns',
                'this Keyword — Context, binding, call(), apply(), bind()',
                'Prototypes & Prototype Chain — How inheritance works under the hood',
                'Classes — class, constructor, extends, super, static methods',
                'Getters & Setters — get, set',
                'Object Methods — Object.keys(), Object.values(), Object.entries(), Object.assign(), Object.freeze()',
                'Encapsulation — Private fields (#), closures for privacy',
                'Event Loop — Call stack, Web APIs, callback queue, microtask queue',
                'Promises — new Promise(), .then(), .catch(), .finally(), Promise.all(), Promise.race()',
                'Async/Await — async functions, await, error handling with try/catch',
                'Timers — setTimeout, setInterval, clearTimeout, clearInterval',
                'Fetch API — Making HTTP requests, handling responses, JSON parsing',
                'Selecting Elements — getElementById, querySelector, querySelectorAll',
                'Modifying Elements — innerHTML, textContent, classList, style, setAttribute',
                'Creating & Removing Elements — createElement, appendChild, removeChild, insertAdjacentHTML',
                'Event Handling — addEventListener, event types, event.preventDefault(), event.stopPropagation()',
                'Event Delegation — Handling events on parent elements',
                'DOM Traversal — parentNode, children, nextSibling, closest()',
                'Local Storage & Session Storage — localStorage, sessionStorage, cookies',
                'History API — pushState, replaceState, popstate',
                'Geolocation API — Getting user location',
                'Clipboard API — Copy/paste functionality',
                'Web Workers — Running scripts in background threads',
                'Intersection Observer — Lazy loading, infinite scroll',
                'Resize Observer — Watching element size changes',
                'Try/Catch/Finally — Handling runtime errors',
                'Custom Errors — Extending the Error class',
                'Error Types — TypeError, ReferenceError, SyntaxError, RangeError',
                'Debugging — console methods, breakpoints, DevTools, debugger keyword',
                'Strict Mode — "use strict", benefits and restrictions',
                'ES6 Features — Arrow functions, classes, modules, destructuring, template literals',
                'ES2017+ — Async/await, Object.entries(), padStart/padEnd',
                'ES2020+ — Optional chaining (?.), nullish coalescing (??), Promise.allSettled()',
                'ES2021+ — Logical assignment operators, String.replaceAll(), numeric separators',
                'ES2022+ — Top-level await, class fields, Array.at()',
                'ES2023+ — Array.findLast(), Array.toSorted(), Array.toReversed()',
                'ES Modules — import, export, named vs default exports, dynamic imports',
                'CommonJS — require(), module.exports (Node.js)',
                'Package Managers — npm, yarn, pnpm',
                'Bundlers — Webpack, Vite, Rollup, Parcel',
                'Transpilers — Babel, converting modern JS to older versions',
                'Linting & Formatting — ESLint, Prettier',
                'Generators & Iterators — function*, yield, custom iterables',
                'Symbols — Unique identifiers, well-known symbols',
                'Proxy & Reflect — Intercepting object operations',
                'Regular Expressions — Patterns, flags, match(), replace(), test()',
                'Memory Management — Garbage collection, memory leaks, avoiding leaks',
                'Design Patterns — Singleton, Observer, Factory, Module, MVC/MVVM',
                'Big O Notation — Time & space complexity',
                'Sorting — Bubble, selection, merge, quick sort',
                'Searching — Binary search, linear search',
                'Data Structures — Stacks, queues, linked lists, trees, graphs, hash maps',
                'Recursion — Base cases, recursive patterns, memoization',
                'Node.js Core — fs, path, os, events modules',
                'Express.js — Building REST APIs',
                'NPM Scripts — Automating tasks',
                'Environment Variables — dotenv, process.env',
                'Unit Testing — Jest, Vitest',
                'Integration Testing — Testing multiple units together',
                'E2E Testing — Playwright, Cypress',
                'TDD — Test-Driven Development approach'
            ]
        },
        react: {
            label: 'React Concepts',
            items: [
                'What is React? — Virtual DOM, component-based architecture, declarative UI',
                'JSX — JavaScript XML syntax, expressions in JSX, JSX rules & gotchas',
                'Components — Functional components, component composition, reusability',
                'Props — Passing data, prop types, default props, children prop',
                'State — useState, local state, state immutability, re-rendering',
                'Conditional Rendering — &&, ternary, early returns',
                'List Rendering — map(), keys, why keys matter',
                'Event Handling — onClick, onChange, onSubmit, synthetic events',
                'Controlled vs Uncontrolled Components — Form inputs, ref vs state',
                'Component Lifecycle — Mount, update, unmount phases',
                'useState — Local state management, state updates, batching',
                'useEffect — Side effects, dependency array, cleanup functions',
                'useRef — DOM references, persisting values without re-render',
                'useContext — Consuming context, avoiding prop drilling',
                'useReducer — Complex state logic, reducer pattern, dispatch',
                'useMemo — Memoizing expensive calculations',
                'useCallback — Memoizing functions, preventing unnecessary renders',
                'useLayoutEffect — Synchronous DOM measurements',
                'useId — Generating unique IDs for accessibility',
                'useImperativeHandle — Customizing ref exposure with forwardRef',
                'useDebugValue — Custom hook debugging in DevTools',
                'useDeferredValue — Deferring non-urgent UI updates',
                'useTransition — Marking state updates as non-urgent',
                'useSyncExternalStore — Subscribing to external stores',
                'Custom Hooks — Extracting reusable logic, naming conventions (use*)',
                'Local State — useState, lifting state up, sibling communication',
                'Context API — createContext, Provider, useContext, limitations',
                'Redux Toolkit — createSlice, configureStore, useSelector, useDispatch',
                'Zustand — Lightweight global state, simple store setup',
                'Jotai / Recoil — Atomic state management',
                'React Query / TanStack Query — Server state, caching, fetching, mutations',
                'SWR — Data fetching with stale-while-revalidate strategy',
                'Higher-Order Components (HOC) — Wrapping components for reusability',
                'Render Props — Sharing logic via function props',
                'Compound Components — Parent-child implicit state sharing',
                'Controlled Components Pattern — Fully controlled UI state',
                'Container/Presenter Pattern — Separating logic from UI',
                'Slots Pattern — Flexible layouts with children',
                'Forwarding Refs — React.forwardRef, passing refs to child components',
                'React Router Setup — BrowserRouter, Routes, Route',
                'Navigation — Link, NavLink, useNavigate',
                'Dynamic Routes — URL params, useParams',
                'Nested Routes — Outlet, layout routes',
                'Protected Routes — Auth guards, redirects',
                'Query Strings — useSearchParams',
                'Lazy Loading Routes — React.lazy, Suspense with routes',
                'Controlled Forms — Managing form state with useState',
                'React Hook Form — useForm, register, handleSubmit, validation',
                'Formik — Form management, Yup validation',
                'Zod + React Hook Form — Schema-based validation',
                'File Uploads — Handling file inputs, previews',
                'React.memo — Preventing unnecessary re-renders',
                'Code Splitting — React.lazy, dynamic import()',
                'Suspense — Loading states for lazy components',
                'Virtualization — react-window, react-virtual for large lists',
                'Avoiding Re-renders — State colocation, proper component structure',
                'Profiler — React DevTools profiler, finding bottlenecks',
                'Concurrent Features — useTransition, useDeferredValue',
                'CSS Modules — Scoped styles, styles.className',
                'Styled Components — CSS-in-JS, dynamic styles, theming',
                'Emotion — CSS-in-JS alternative',
                'Tailwind CSS — Utility-first with React',
                'Inline Styles — When to use, limitations',
                'CSS Variables with React — Dynamic theming',
                'Fetch API / Axios — Basic REST calls in useEffect',
                'TanStack Query — Caching, background refetching, pagination, mutations',
                'SWR — Lightweight fetching with caching',
                'GraphQL — Apollo Client, useQuery, useMutation',
                'Error & Loading States — Handling async UI gracefully',
                'Optimistic Updates — Updating UI before server confirms',
                'Reconciliation — How React diffs the virtual DOM',
                'Fiber Architecture — React\'s internal rendering engine',
                'Error Boundaries — componentDidCatch, catching render errors',
                'Portals — Rendering outside the root DOM node (ReactDOM.createPortal)',
                'Strict Mode — Detecting side effects, double-invoking in development',
                'Fragments — <>...</>, avoiding unnecessary DOM wrappers',
                'Suspense for Data — Experimental data fetching with Suspense',
                'Server Components — React Server Components (RSC), client vs server split',
                'Typing Props — interface, type, optional props',
                'Typing State — Generic useState<Type>',
                'Typing Events — React.ChangeEvent, React.MouseEvent',
                'Typing Refs — useRef<HTMLElement>',
                'Typing Custom Hooks — Return types, generic hooks',
                'Typing Context — Typed context values',
                'React Testing Library — render, screen, fireEvent, userEvent',
                'Jest — Unit tests, mocking modules',
                'Vitest — Faster alternative to Jest',
                'Component Testing — Testing UI behavior, not implementation',
                'Mocking APIs — MSW (Mock Service Worker)',
                'E2E Testing — Playwright, Cypress with React apps',
                'Next.js — SSR, SSG, ISR, App Router, file-based routing',
                'Remix — Full-stack React, loaders, actions',
                'Vite — Fast dev server and build tool for React',
                'Storybook — Component documentation and isolated development',
                'React Native — Mobile apps with React knowledge',
                'Semantic JSX — Proper HTML elements in components',
                'ARIA in React — aria-* props, roles',
                'Focus Management — useRef for focus, focus traps in modals',
                'Keyboard Navigation — Tab order, keyboard events',
                'axe-core / eslint-plugin-jsx-a11y — Automated accessibility checks',
                'Folder Structure — Feature-based vs type-based organization',
                'Absolute Imports — Configuring path aliases',
                'Environment Variables — .env, VITE_ / REACT_APP_ prefixes',
                'API Layer — Separating API calls into service files',
                'Component Library — Building reusable internal UI libraries'
            ]
        }
    };

    const selectTopic = (key) => setSelectedTopic(key);

    const selected = selectedTopic ? topicData[selectedTopic] : null;

    return (
        <div className="app">
            <Navigation />
            <Hero />
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
                    <p>Click a card button to view related concepts.</p>
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
        </div>
    );
}

export default App;
