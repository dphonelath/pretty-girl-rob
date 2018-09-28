import React, { Component } from 'react';
import './App.css';
import PrettyRob from  './component/PrettyRob';
import FireRob from './component/FireRob';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      togglePretty: false,
      toggleFire: false
    }
  }


  toggleYes = () => {
    let pic = !this.state.togglePretty
    this.setState({
      togglePretty: pic
    });
  }

  toggleNo = () => {
    let pic = !this.state.toggleFire
    this.setState({
      toggleFire: pic
    });
  }



  render() {
    return (
      <div className="App">
        <div className="container">
            <div>
              <h1> Are you feeling Pretty Girl Rob today?</h1>
            </div>
              <div className= "button-container">
                  <button onClick={this.toggleYes} className="yes">Oh yeah girlll!</button>
                  <button onClick={this.toggleNo} className="no">Not yet, gotta put some make-up on</button>
            </div>  
          </div>     
              {(this.state.togglePretty) ? <PrettyRob /> : null}
              {(this.state.toggleFire) ? <FireRob /> : null}
      </div>
    );
  }
}

export default App;
