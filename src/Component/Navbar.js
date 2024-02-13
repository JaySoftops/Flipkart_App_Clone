import { Box, Popover, withStyles } from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NavbarController from './NavbarController'
import FashionNav from './FashionNav'

const style = ({
    navbar: {
        width: '100%',
        backgroundColor: '#f9f0f0',
        margin: 'auto',
        padding: '8px 00px',
        overflowX: 'hidden',
    },
    navbarUl: {
        width: '83%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'white',
        margin: 'auto',
        overflowX: 'scroll',
        scrollBehavior: 'smooth',
    },
    navbarLink: {
        width: '98px',
        // height: '151px',
        flexShrink: '0',
        // flexBasis: '40%',    
        color: 'black',
        textDecoration: 'none',
        margin: '5px',
        padding: '8px 20px 20px 20px',
        textAlign: 'center',
    },
    navbarLinkTwo: {
        color: 'black',
        textDecoration: 'none',
        margin: '5px',
        padding: '8px 2px 2px 20px',
        textAlign: 'center',
    },
    navListImg: {
        marginLeft: '-6px'
    },
    navLinkName: {
        fontSize: '.93rem',
        fontWeight: '600',
        marginTop: '5px',
    },
    popoverFashion: {
        marginTop: '110px'
    },
    '@media screen and (min-width: 1024px) and (max-width: 1440px)': {
        navbarUl: {
            width: '93%',
            // display: 'flex',
        },
    },
    '@media screen and (min-width: 768px) and (max-width: 1023px)': {
        navbarUl: {
            width: '95%',
            justifyContent: 'flex-start',
        }
    },
    '@media screen and (min-width: 300px) and (max-width: 767px)': {
        navbar: {
            width: '100%',
            padding: '0px',
        },
        navbarUl: {
            width: '100%',
            justifyContent: 'flex-start',
        },
        navbarLink: {
            width: '100px',
            padding: '4px'
        },
        navbarLinkTwo: {
            width: '120px',
            padding: '4px'
        },
        navListImg: {
            height: '60px',
        },
        navLinkName: {
            width: '90px',
            fontSize: '.80rem',
            fontWeight: '400',
        },
    },
})

class Navbar extends NavbarController {
    render() {
        const open = Boolean(this.state.anchorElFashion);
        // const id2 = open ? 'simple-popper' : undefined;
        const open2 = Boolean(this.state.anchorElElectronics);
        const open3 = Boolean(this.state.anchorElHome);
        const open4 = Boolean(this.state.anchorElBeauty);
        const open5 = Boolean(this.state.anchorElTwoWheelers);

        const { classes } = this.props
        return (
            <Box className={classes.navbar}>
                <ul className={classes.navbarUl}>
                    <NavLink to='/grocery' className={classes.navbarLink}>
                        <img className={classes.navListImg} src='https://rukminim2.flixcart.com/flap/64/64/image/29327f40e9c4d26b.png?q=100' alt='Grocery' />
                        <Box className={classes.navLinkName}>Grocery</Box>
                    </NavLink>
                    <NavLink to='/mobiles' className={classes.navbarLink}>
                        <img className={classes.navListImg} src='https://rukminim2.flixcart.com/flap/64/64/image/22fddf3c7da4c4f4.png?q=100' alt='Mobiles' />
                        <Box className={classes.navLinkName}>Mobiles</Box>
                    </NavLink>
                    <NavLink to='/fashion' className={`${classes.navbarLinkTwo}`} onMouseOver={this.handleFashionHover}>
                        <img className={classes.navListImg} src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0d75b34f7d8fbcb3.png?q=100' alt='Fashion' />
                        <Box className={classes.navLinkName}>Fashion <ExpandMore fontSize='small' style={{ marginBottom: '-5px' }} /></Box>
                    </NavLink>
                    <Popover className={classes.popoverFashion}
                        open={open}
                        anchorEl={this.state.anchorElFashion}
                        onClose={this.handleFashionClose}>
                        <FashionNav />
                    </Popover>
                    <NavLink to='/electronics' className={`${classes.navbarLinkTwo}`} onMouseOver={this.handleElectronicsHover}>
                        <img className={classes.navListImg} src='https://rukminim2.flixcart.com/flap/64/64/image/69c6589653afdb9a.png?q=100' alt='Electronics' />
                        <Box className={classes.navLinkName}>Electronics <ExpandMore fontSize='small' style={{ marginBottom: '-5px' }} /></Box>
                    </NavLink>
                    <Popover className={classes.popoverFashion}
                        open={open2}
                        anchorEl={this.state.anchorElElectronics}
                        onClose={this.handleElectronicsClose}>
                        <FashionNav />
                    </Popover>
                    <NavLink to='/home&furniture' className={`${classes.navbarLinkTwo}`} onMouseOver={this.handleHomeHover}>
                        <img className={classes.navListImg} src='https://rukminim2.flixcart.com/flap/64/64/image/ab7e2b022a4587dd.jpg?q=100' alt='Home&Furniture' />
                        <Box className={classes.navLinkName}>Home & Furniture <ExpandMore fontSize='small' style={{ marginBottom: '-5px' }} /></Box>
                    </NavLink>
                    <Popover className={classes.popoverFashion}
                        open={open3}
                        anchorEl={this.state.anchorElHome}
                        onClose={this.handleHomeClose}>
                        <FashionNav />
                    </Popover>
                    <NavLink to='/appliances' className={classes.navbarLink}>
                        <img className={classes.navListImg} src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/0139228b2f7eb413.jpg?q=100' alt='Appliances' />
                        <Box className={classes.navLinkName}>Appliances</Box>
                    </NavLink>
                    <NavLink to='/travel' className={classes.navbarLink}>
                        <img className={classes.navListImg} src='https://rukminim2.flixcart.com/flap/64/64/image/71050627a56b4693.png?q=100' alt='Travel' />
                        <Box className={classes.navLinkName}>Travel</Box>
                    </NavLink>
                    <NavLink to='/beautytoys&more' className={`${classes.navbarLinkTwo}`} onMouseOver={this.handleBeautyHover}>
                        <img className={classes.navListImg} src='https://rukminim2.flixcart.com/flap/64/64/image/dff3f7adcf3a90c6.png?q=100' alt='BeautyToys&More' />
                        <Box className={classes.navLinkName}>Beauty, Toys & More <ExpandMore fontSize='small' style={{ marginBottom: '-5px' }} /></Box>
                    </NavLink>
                    <Popover className={classes.popoverFashion}
                        open={open4}
                        anchorEl={this.state.anchorElBeauty}
                        onClose={this.handleBeautyClose}>
                        <FashionNav />
                    </Popover>
                    <NavLink to='/twowheelers' className={`${classes.navbarLinkTwo}`} onMouseOver={this.handleTwoWheelersHover}>
                        <img className={classes.navListImg} src='https://rukminim2.flixcart.com/fk-p-flap/64/64/image/05d708653beff580.png?q=100' alt='TwoWheelers' />
                        <Box className={classes.navLinkName}>Two Wheelers <ExpandMore fontSize='small' style={{ marginBottom: '-5px' }} /></Box>
                    </NavLink>
                    <Popover className={classes.popoverFashion}
                        open={open5}
                        anchorEl={this.state.anchorElTwoWheelers}
                        onClose={this.handleTwoWheelersClose}>
                        <FashionNav />
                    </Popover>
                </ul>
            </Box>
        )
    }
}
export default withStyles(style)(Navbar)