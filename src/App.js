import React from 'react';
import Component1 from "./functional/component1";
import Container1 from "./container/container1";

class App extends React.Component {

  renderFunction1 = () => {
    return true ? <div>Condition 1</div> : <div>Condition 1</div>;
  }

  render(){
    return (
        <div className="App">
          <div>React</div>
          Div 1
          <div>{this.renderFunction1()}</div>
          Div 2
          <div></div>
      </div>
    )}
  }

export default App;