import React, { Component } from 'react'
import DisplayComponent from '../View/DisplayComponent'

export default class DataComponent extends Component {
    constructor() {
        super();
        this.state = {
            persons: [
                { name: "Maddy", age: 32 },
                { name: "Shahul", age: 12 },
                { name: "Alex", age: 19 }
            ]
        }
    }

    render() {
        return (
            <>
                <DisplayComponent person={this.state.persons} />
            </>
        )
    }
}
