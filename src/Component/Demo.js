import React, { Component } from 'react'

export default class Demo extends Component {
  render() {
    return (
      <div>
        <div className='demo'>Demo Body
          <span className='span'>span</span>
        </div>
        <button onClick={this.handleAdd}>Increment {this.state.count}</button>
      </div>
    )
  }
}
