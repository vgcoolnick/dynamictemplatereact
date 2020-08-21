import React, {Component} from 'react';
import Component1 from "../functional/component1";

class Container1 extends Component {
    constructor(props) {
        super(props);
        this.state ={
            stateprop1: 'Our Initial State',
            stateprop2: 5
        }
    }

    changeState2 = () => {
        this.setState({
            stateprop2: this.state.stateprop2 + 1
        })
    }

    changeState1 = () => {
        this.setState({
            stateprop1: this.state.stateprop1 + 'L'
        })
    }
    render() {
        return (
            <div>
                {this.state.stateprop1}
                <br/>
                {this.state.stateprop2}
                <br/>
                <Component1 prop1={this.state.stateprop1}/>
                <br/>
                <button onClick={this.changeState1}>
                    Change State 1
                </button>
                <button onClick={this.changeState2}>
                    Change State 2
                </button>
            </div>
        )
    }
}

export default Container1;