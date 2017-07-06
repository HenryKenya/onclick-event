import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class Child extends Component{
    render(){
        return(
            <div>
                <button className='btn btn-large z-depth-5' onClick={this.props.onEvent}>Click to see alert!</button>
            </div>
        )
    }
}

class Parent extends Component {

    perfomEvent(){
        alert('This alert came up because you clicked the button')
    }

    render() {
        return (
            <div className='container main'>
                <h4>{this.props.title}</h4>
                <Child onEvent={this.perfomEvent}/>
            </div>
        );
    }
}

ReactDOM.render(
    <Parent title={"Event in React"}/>, document.getElementById('root')
)

