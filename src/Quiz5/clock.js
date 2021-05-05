import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props) {
        super(props) ;
        this.state={date:new Date()};
        this.tick= this.tick.bind(this);
    }

    componentDidMount(){
        this.timerID = setInterval(this.tick,1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
        <div>
        <h1> CGU'S timer </h1>
        <h2>{this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }

    tick(){
        this.setState({
            date:new Date()
        });
    }
}
ReactDOM.render(<Clock/>,document.getElementById('root'));