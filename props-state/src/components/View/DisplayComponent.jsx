import React, { Component } from 'react'

export default class DisplayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: this.props.person || []
        }
    }

    renderOp = () => {
        console.log(this.state.persons);
        return this.state.persons.map((person) => {
            return <React.Fragment key={person.name}>
                <p>
                    <span>Name:{person.name}</span>
                    <span>Age:{person.age}</span>
                </p>
            </React.Fragment>
        })
    }

    switchNameHandler = () => {
        console.log("click");
        this.setState({
            persons: [
                { name: "Alex", age: 19 },
                { name: "Maddy", age: 32 },
                { name: "Shahul", age: 12 }
            ]
        })
    }

    render() {
        return (
            <div>
                {this.renderOp()}
                <button onClick={this.switchNameHandler}>Switch</button>
            </div>
        )
    }
}
