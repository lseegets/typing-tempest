import './App.css';
import { WordInput } from '../WordInput/WordInput';
import { Word } from '../Word/Word';
import { Timer } from '../Timer/Timer';
import jsonData from '../the-tempest-word-list.json';
import React, { useState } from 'react';

export default function App() {

  const SECONDS = 60;
  const TOTAL_WORDS = jsonData.length;

  const [words, setWords] = useState([]);
  const [time, setTime] = useState(SECONDS * 1000);
  const [input, setInput] = useState('');  
  const [inputEnabled, setInputEnabled] = useState(true);
  const [highscore, setHighscore] = useState(0);

  // Add a word to the list of found words

  const addWord = (word) => {
    setWords((words) => [word, ...words]);
  }

  // Show results once the countdown has finished

  const showResults = () => {
    if (!inputEnabled) {
      document.getElementById('restart-button').style.setProperty('display', 'block');
      if (words.length > highscore) {
        setHighscore(words.length);
      }

      return `Time's up! You found ${words.length} ${words.length > 1 ? 'words' : 'word'} from The Tempest.
      That's ~ ${(words.length / TOTAL_WORDS * 100).toFixed(2)} percent of
      all unique words Shakespeare used to write the play!`;
    }
  }

  // Remove all found words from the list, enable and clear the input field and reset the timer to restart the game

  const restartGame = () => {
    setWords(() => []);
    setInputEnabled(true);
    setInput('');
    setTime(SECONDS * 1000);
    document.getElementById('restart-button').style.setProperty('display', 'none');
  }

  return (
    <div className="App">
        <h1>Typing Tempest</h1>
        <div
          className="description">William Shakespeare used ~ 3200 unique words in his play <i>The Tempest</i>.
          <br/>
          Test your typing skills against The Bard of Avon: How many words from his play can you type within one minute?
          Entering your first word will set off the countdown.
        </div>
        <div className="highscore">{highscore > 0 ? `Highscore: ${highscore}` : ''}</div>

        <div className="content">
          <WordInput
            addWord={addWord}
            words={words}
            input={input}
            setInput={setInput}
            inputEnabled={inputEnabled}
          />
          <Timer
            time={time}
            setTime={setTime}
            words={words}
            setInputEnabled={setInputEnabled}
          />
          <div className="score">{showResults()}</div>
          <button
            className="restart-button"
            id="restart-button"
            onClick={restartGame}
          >
            Restart!
          </button>
          <ul className="words">
            {words.map((word) => (
              <Word
                key={word.id}
                word={word}
              />
            ))}
          </ul>
        </div>
    </div>
  );
}