import React from 'react';
const scoreWord = require('./scoreword.js');

export default class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      submitedWord: '',
      mulitiplier: 1,
    };
  }

  render() {
    return (
      <section>
        <p>Hello World</p>
      </section>
    );
  }
}
