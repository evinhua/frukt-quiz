import React from 'react';
import Quiz from './components/Quiz';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Frukt & Grönsaks Quiz</h1>
        <p>För små barn att lära sig om frukter och grönsaker</p>
      </header>
      <main>
        <Quiz />
      </main>
      <footer>
        <p>Ett roligt spel för 3-åringar</p>
      </footer>
    </div>
  );
}

export default App;
