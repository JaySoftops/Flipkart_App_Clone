import React, { Component } from 'react'
import DemoController from './DemoController'

export default class Demo extends DemoController {
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
