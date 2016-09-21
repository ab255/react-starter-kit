import React from 'react';
const scoreWord = require('./scoreword.js');

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      word: '',
      previousWords: [],
    };
  }

  render() {
    const { previousWords, word } = this.state;
    return (
      <section>
        <input value={ word } onChange={(e) => this.setState({ word: e.target.value })}/>
        <h2>{word}</h2>
        <h2>Score: {scoreWord(word)}</h2>
        <button onClick={() => this.setState({ previousWords: previousWords.concat(word) })}>Submit</button>
        <button onClick={() => this.setState({ word: '' })}>Clear</button>
        <ul>
          {previousWords.map((word) => <li>{word} ({scoreWord(word)})</li>)}
        </ul>
      </section>
    );
  }
}
