import React from 'react';
import audio from './fora-bolsonaro.mp3';
import logo from './logo.png';
import './App.css';
import ReactGA from "react-ga";

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
        <p><img src={logo} className="logo" alt="logo" /></p>
        <button onClick={this.togglePlay} className="button">
          {this.state.play ? 'Parar' : 'Panelar'}
        </button>
      </div>
    );
  }

  componentDidMount() {
    ReactGA.initialize('UA-4427777-19');
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
  }
}

export default App;
