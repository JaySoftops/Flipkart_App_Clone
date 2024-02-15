import React, { Component } from 'react'

export default class DemoController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleAdd = () => {
        this.setState({ count: count + 1 }, () => {
            console.log(this.state.count, "@@@")
        })
    }

    render() {
        return (
            <div>DemoController</div>
        )
    }
}
