import React, { Component } from 'react';
import './App.css';
import TitleScreen from './ReactComponents/TitleScreen';
import InputManager from './InputManager';

//The canavas consts
const width = 400;
const height = 250;
const ratio = window.devicePixelRatio || 1;

//Gamestates defined.The number of screens to be used
const GameState = {
  StartScreen : 0,
  Playing : 1,
  GameOver : 2
};


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        input: new InputManager(),
        screen: {
                  width: width,
                  height: height,
                  ratio: ratio
                },
        gameState: GameState.StartScreen
      };
    }

    update(currentDelta) {
      const keys = this.state.input.pressedKeys;
      if (this.state.gameState === GameState.StartScreen && keys.enter) 
      {
      this.startGame();
      }
      requestAnimationFrame(() => {this.update()});
    }

    startGame() {
      this.setState({
        gameState: GameState.Playing
      });
    }

    componentDidMount() {
      this.state.input.bindKeys();
      //  this.updateCanvas();
      requestAnimationFrame(() => {this.update()});    
    }
    
    componentWillUnmount() {
      this.state.input.unbindKeys();
    }

    // updateCanvas() {
    //   const ctx = this.refs.canvas.getContext('2d');
    //   ctx.fillRect(0,0, 100, 100);
    // }

  render() {
    return (
      <div className="App">
         <header className="App-header">
				
        </header>
        <p className="App-intro">
        
        { this.state.gameState === GameState.StartScreen ?
        <code>Welcome to the react js game.</code>
        :<code>Bite bite bite.....</code> 
        }
        </p>
        { this.state.gameState === GameState.StartScreen && <TitleScreen /> }  
          <div> 
        
            <canvas ref="canvas" 
              width={ this.state.screen.width * this.state.screen.ratio } 
              height={ this.state.screen.height * this.state.screen.ratio } />
          </div>
      </div>
      
    );
  }
}

export default App;
