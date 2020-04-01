import React from 'react';
import audio from './fora-bolsonaro.mp3';
import logo from './logo.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false
    };

    this.audio = new Audio(audio);
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  }

  render() {
    return (
      <div className="container">
        <p>
          <img src={logo} className="logo" alt="logo" />
        </p>
        <button onClick={this.togglePlay} className="button">
          {this.state.play ? 'Pause' : 'Play'}
        </button>
      </div>
    );
  }
}

export default App;
