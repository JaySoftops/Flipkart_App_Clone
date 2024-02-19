import React, { Component } from 'react'

export default class DemoController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 }, () => {
            console.log(this.state.count, "@@@")
        })
    }

    handleObject = () => {
        return { id: 4 };
    }

    handleLoadData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Hi Load')
            })
            resolve({ name: "Load Data" })
        }, 2000)
    }

    handleAdd = (a, b) => {
        return a + b;
    }

    componentDidMount() {
        this.handleAdd(5, 10);
    }

    render() {
        return (
            <div>DemoController</div>
        )
    }
}
