import { Box, Popover, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import FashionNavController from './FashionNavController';

const style = ({
    fashionNavUl: {
        width: '230px',
        fontSize: '.8rem',
        overFlowY: 'hidden',
    },
    fashionNavList: {
        color: 'black',
        textDecoration: 'none',
        padding: '8px 5px',
        '&:hover': {
            backgroundColor: '#fcf3f3'
        },
    },
    fashinNavLink: {
        textDecoration: 'none',
        color: 'black',
        padding: '10px 10px',
    },
    pop: {
        margin: '2px 240px',
    },
    fashionNavLinkUl: {
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
    },
    fashionNavLinkList: {
        width: '100%',
        fontSize: '.8rem',
        color: 'black',
        textDecoration: 'none',
        padding: '5px 7px',
        '&:hover': {
            backgroundColor: '#fcf3f3',
        },
    },

})

class FashionNav extends FashionNavController {
    render() {
        const open = Boolean(this.state.anchorElMenTopWear);
        const open2 = Boolean(this.state.anchorElMenBottomWear);
        const open3 = Boolean(this.state.anchorElWomenEthnic);
        const open4 = Boolean(this.state.anchorElWomenWestern);
        const open5 = Boolean(this.state.anchorElMenFootwear);
        const open6 = Boolean(this.state.anchorElWomenFootwear);
        const open7 = Boolean(this.state.anchorElWatches);
        const open8 = Boolean(this.state.anchorElBags);
        const open9 = Boolean(this.state.anchorElKids);
        const open10 = Boolean(this.state.anchorElEssentials);
        const open11 = Boolean(this.state.anchorElWinter);

        const { classes } = this.props;
        return (
            <ul className={classes.fashionNavUl}>
                <li to='' className={classes.fashionNavList}>
                    <NavLink to='' className={classes.fashinNavLink} onMouseOver={this.handleMenTopWearHover}>Men's Top Wear</NavLink>
                    <Popover open={open} className={classes.pop}
                        anchorEl={this.state.anchorElMenTopWear}
                        onClose={this.handleMenTopWearClose}>
                        <ul className={classes.fashionNavLinkUl}>
                            <NavLink to='' className={classes.fashionNavLinkList}>1</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>2</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>3</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>4</NavLink>
                        </ul>
                    </Popover>
                </li>
                <li className={classes.fashionNavList}>
                    <NavLink to='' className={classes.fashinNavLink} onMouseOver={this.handleMenBottomWearHover}>Men's Bottom Wear</NavLink>
                    <Popover open={open2} className={classes.pop}
                        anchorEl={this.state.anchorElMenBottomWear}
                        onClose={this.handleMenBottomWearClose}>
                        <ul className={classes.fashionNavLinkUl}>
                            <NavLink to='' className={classes.fashionNavLinkList}>1</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>2</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>3</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>4</NavLink>
                        </ul>
                    </Popover>
                </li>
                <li className={classes.fashionNavList}>
                    <NavLink to='' className={classes.fashinNavLink} onMouseOver={this.handleWomenEthnicHover}>Women Ethnic</NavLink>
                    <Popover open={open3} className={classes.pop}
                        anchorEl={this.state.anchorElWomenEthnic}
                        onClose={this.handleWomenEthnicClose}>
                        <ul className={classes.fashionNavLinkUl}>
                            <NavLink to='' className={classes.fashionNavLinkList}>1</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>2</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>3</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>4</NavLink>
                        </ul>
                    </Popover>
                </li>
                <li className={classes.fashionNavList}>
                    <NavLink to='' className={classes.fashinNavLink} onMouseOver={this.handleWomenWesternHover}>Women Western</NavLink>
                    <Popover open={open4} className={classes.pop}
                        anchorEl={this.state.anchorElWomenWestern}
                        onClose={this.handleWomenWesternClose}>
                        <ul className={classes.fashionNavLinkUl}>
                            <NavLink to='' className={classes.fashionNavLinkList}>1</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>2</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>3</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>4</NavLink>
                        </ul>
                    </Popover>
                </li>
                <li className={classes.fashionNavList}>
                    <NavLink to='' className={classes.fashinNavLink} onMouseOver={this.handleMenFootwearHover}>Men Footwear</NavLink>
                    <Popover open={open5} className={classes.pop}
                        anchorEl={this.state.anchorElMenFootwear}
                        onClose={this.handleMenFootwearClose}>
                        <ul className={classes.fashionNavLinkUl}>
                            <NavLink to='' className={classes.fashionNavLinkList}>1</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>2</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>3</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>4</NavLink>
                        </ul>
                    </Popover>
                </li>
                <li className={classes.fashionNavList}>
                    <NavLink to='' className={classes.fashinNavLink} onMouseOver={this.handleWomenFootwearHover}>Women Footwear</NavLink>
                    <Popover open={open6} className={classes.pop}
                        anchorEl={this.state.anchorElWomenFootwear}
                        onClose={this.handleWomenFootwearClose}>
                        <ul className={classes.fashionNavLinkUl}>
                            <NavLink to='' className={classes.fashionNavLinkList}>1</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>2</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>3</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>4</NavLink>
                        </ul>
                    </Popover>
                </li>
                <li className={classes.fashionNavList}>
                    <NavLink to='' className={classes.fashinNavLink} onMouseOver={this.handleWatchesHover}>Watches and Accessories</NavLink>
                    <Popover open={open7} className={classes.pop}
                        anchorEl={this.state.anchorElWatches}
                        onClose={this.handleWatchesClose}>
                        <ul className={classes.fashionNavLinkUl}>
                            <NavLink to='' className={classes.fashionNavLinkList}>1</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>2</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>3</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>4</NavLink>
                        </ul>
                    </Popover>
                </li>
                <li className={classes.fashionNavList}>
                    <NavLink to='' className={classes.fashinNavLink} onMouseOver={this.handleBagsHover}>Bags, Suitcases & Luggage</NavLink>
                    <Popover open={open8} className={classes.pop}
                        anchorEl={this.state.anchorElBags}
                        onClose={this.handleBagsClose}>
                        <ul className={classes.fashionNavLinkUl}>
                            <NavLink to='' className={classes.fashionNavLinkList}>1</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>2</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>3</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>4</NavLink>
                        </ul>
                    </Popover>
                </li>
                <li className={classes.fashionNavList}>
                    <NavLink to='' className={classes.fashinNavLink} onMouseOver={this.handleKidsHover}>Kids</NavLink>
                    <Popover open={open9} className={classes.pop}
                        anchorEl={this.state.anchorElKids}
                        onClose={this.handleKidsClose}>
                        <ul className={classes.fashionNavLinkUl}>
                            <NavLink to='' className={classes.fashionNavLinkList}>1</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>2</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>3</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>4</NavLink>
                        </ul>
                    </Popover>
                </li>
                <li className={classes.fashionNavList}>
                    <NavLink to='' className={classes.fashinNavLink} onMouseOver={this.handleEssentialsHover}>Essentials</NavLink>
                    <Popover open={open10} className={classes.pop}
                        anchorEl={this.state.anchorElEssentials}
                        onClose={this.handleEssentialsClose}>
                        <ul className={classes.fashionNavLinkUl}>
                            <NavLink to='' className={classes.fashionNavLinkList}>1</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>2</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>3</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>4</NavLink>
                        </ul>
                    </Popover>
                </li>
                <li className={classes.fashionNavList}>
                    <NavLink to='' className={classes.fashinNavLink} onMouseOver={this.handleWinterHover}>Winter</NavLink>
                    <Popover open={open11} className={classes.pop}
                        anchorEl={this.state.anchorElWinter}
                        onClose={this.handleWinterClose}>
                        <ul className={classes.fashionNavLinkUl}>
                            <NavLink to='' className={classes.fashionNavLinkList}>1</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>2</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>3</NavLink>
                            <NavLink to='' className={classes.fashionNavLinkList}>4</NavLink>
                        </ul>
                    </Popover>
                </li>
            </ul>
        )
    }
}

export default withStyles(style)(FashionNav)