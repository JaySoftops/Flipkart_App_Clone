import { withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import Background from '../Savyyr/Group.png'

const style = ({
    backgroundBody: {
        // height: '350px',
        margin: '0px 0px 80px 0px',
    },
    backgroundMainBody: {
        color: 'white',
        textAlign: 'center',
        padding: '100px 0px'
    },
    backgroundHeading: {
        width: '570px',
        fontSize: '2rem',
        fontWeight: '700',
        margin: '10px auto',
        marginTop: '80px'
        // padding: '0px 680px',
    },
    backgroundParagraph: {
        width: '420px',
        fontSize: '1rem',
        lineHeight: '1.2rem',
        margin: 'auto',
        padding: '10px 00px',
    },
    '@media screen and (min-width:1024px) and (max-width:1440px)': {
        backgroundMainBody: {
            padding: '70px 0px'
        },
        backgroundHeading: {
            width: '420px',
            fontSize: '1.6rem',
            fontWeight: '800',
            margin: 'auto',
            marginTop: '60px',
            padding: '0px',
        },
        backgroundParagraph: {
            width: '340px',
            fontSize: '.78rem',
            fontWeight: '600',
            margin: 'auto',
            // padding: '0px 10px',
        },
    },
    '@media screen and (min-width:768px) and (max-width:1023px)': {
        backgroundMainBody: {
            padding: '70px 0px'
        },
        backgroundHeading: {
            width: '420px',
            fontSize: '1.6rem',
            fontWeight: '800',
            margin: 'auto',
            marginTop: '60px',
            padding: '0px',
        },
        backgroundParagraph: {
            width: '340px',
            fontSize: '.78rem',
            fontWeight: '600',
            margin: 'auto',
            // padding: '0px 10px',
        },
    },
    '@media screen and (min-width:300px) and (max-width:767px)': {
        backgroundMainBody: {
            padding: '50px 20px'
        },
        backgroundHeading: {
            width: '100%',
            fontSize: '1rem',
            fontWeight: '800',
            margin: 'auto',
            marginTop: '40px',
            padding: '0px',
        },
        backgroundParagraph: {
            width: '100%',
            fontSize: '.50rem',
            fontWeight: '600',
            lineHeight: '.70rem',
            margin: 'auto',
            // padding: '0px 10px',
        },
    },
})

class BackgroundComp extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.backgroundBody}>
                <div className={classes.backgroundMainBody} style={{
                    backgroundImage: `url(${Background})`,
                    // height: '350px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // objectFit: 'cover',
                }}>
                    <h2 className={classes.backgroundHeading}>We Deliver Solution With The Goal of A Trusting Realationships</h2>
                    <p className={classes.backgroundParagraph}>Appropriate for your specific business, making it easy for you to have quality IT services.</p>
                </div>
            </div>
        )
    }
};

export default withStyles(style)(BackgroundComp)