import React, { Component } from 'react'

export default class InnerDemo extends Component {
    render() {

        const classes = {
            table: {
                border: "1px solid black",
                margin: "10px"
            },
            tr: {
                textAlign: "center",
            },
            th: {
                width: "100px",
                border: "1px solid black",
                padding: "10px"
            },
            td: {
                width: "100px",
                border: "1px solid black",
                padding: "10px"
            },
        }

        return (
            <table className="custom-border" style={classes.table}>
                <tr style={classes.tr}>
                    <th style={classes.th}>S.No</th>
                    <th style={classes.th}>Name</th>
                    <th style={classes.th}>Email</th>
                </tr>
                <tr style={classes.tr}>
                    <td style={classes.td}>{this.props.State}</td>
                    <td style={classes.td}>Jai</td>
                    <td style={classes.td}>Jai@12344</td>
                </tr>
            </table>
        )
    }
}
