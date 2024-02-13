import { withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

const style = ({
    fashionNavUl: {
        width: '230px',
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 10px',
        fontSize: '.8rem',
    },
    fashionNavList: {
        color: 'black',
        textDecoration: 'none',
        padding: '8px 5px',
        '&:hover': {
            backgroundColor: '#fcf3f3'
        },
    }
})

class ElectronicsNav extends Component {
    render() {
        const { classes } = this.props;
        return (
            <ul className={classes.fashionNavUl}>
                <NavLink to='' className={classes.fashionNavList}>Men's Top Wear</NavLink>
                <NavLink to='' className={classes.fashionNavList}>Men's Bottom Wear</NavLink>
                <NavLink to='' className={classes.fashionNavList}>Women Ethnic</NavLink>
                <NavLink to='' className={classes.fashionNavList}>Women Western</NavLink>
                <NavLink to='' className={classes.fashionNavList}>Men Footwear</NavLink>
                <NavLink to='' className={classes.fashionNavList}>Women Footwear</NavLink>
                <NavLink to='' className={classes.fashionNavList}>Watches and Accessories</NavLink>
                <NavLink to='' className={classes.fashionNavList}>Bags, Suitcases & Luggage</NavLink>
                <NavLink to='' className={classes.fashionNavList}>Kids</NavLink>
                <NavLink to='' className={classes.fashionNavList}>Essentials</NavLink>
                <NavLink to='' className={classes.fashionNavList}>Winter</NavLink>
            </ul>
        )
    }
}

export default withStyles(style)(ElectronicsNav)