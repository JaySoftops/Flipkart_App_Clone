import React, { Component } from 'react'
import DemoController from './DemoController'
import InnerDemo from './InnerDemo';

class Demo extends DemoController {
  render() {
    const classes = {
      demoBody: {
        width: "500px",
        height: "280px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        padding: "20px"
      },
      demo: {
        fontSize: "2rem",
        margin: "15px"
      },

      demoButton: {
        width: "130px",
        padding: "10px 0px",
        border: "none",
        borderRadius: "5px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
      }
    }

    return (
      <div className="demoBody" style={classes.demoBody} >
        <div className="demo" style={classes.demo}>Demo Body
          <span className="span" style={classes.span}>span</span>
        </div>
        <button className={`demoButton-${this.state.count}`} style={classes.demoButton} onClick={this.handleAdd}>Increment {this.state.count}</button>
        <div>
          <h3 style={{ textAlign: "center", padding: "15px 0px 0px" }}>Child Component</h3>
          <input type="text" value="Data" style={{ width: "150px", marginLeft: "100px" }} />
          <InnerDemo Sno={this.state.count} />
        </div>
      </div >
    )
  }
}

export default (Demo);