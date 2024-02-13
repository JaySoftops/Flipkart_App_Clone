import { Box, Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Popover, SwipeableDrawer, TextField, styled, withStyles } from '@material-ui/core'
import { AccountCircle, KeyboardArrowDown, MoreVert, Notifications, Phone, Search, ShoppingCart, Storefront, HeadsetMic, TrendingUp, GetApp, Star, Favorite, Redeem, CardMembership, CardTravel, Menu, Assistant, Category, More, GTranslate, LocalOffer, LocalMall, Forum } from '@material-ui/icons'
import React, { Component } from 'react'
import HeaderController from './HeaderController';
import { NavLink } from 'react-router-dom';

const style = ({
    headerBody: {
        width: '84%',
        display: 'flex',
        justifyContent: 'center',
        padding: '12px 30px',
        margin: 'auto',
        '& .PrivateSwipeArea-root-331': { left: '-20px' },
    },
    Menubar: {
        display: 'none',
    },
    logo: {
        width: '159px',
        marginRight: '42px',
    },
    logoImg: {
        width: '100%',
        height: '100%',
    },
    inn: {
        border: 'none',
        outline: 'none',
        backgroundColor: 'eeeeff',
    },
    searchBar: {
        width: '55%',
    },
    inputSearch: {
        width: '98%',
    },
    headerButton: {
        width: '35%',
        display: 'flex',
    },
    individualBtn: {
        display: 'flex',
        padding: '0px 15px'
    },
    loginUl: {
        margin: '35px 30px',
    },
    LoginList: {
        listStyle: 'none',
        padding: '10px 5px',
        '&:hover': {
            backgroundColor: '#fcf3f3'
        },
    },
    threeDots: {
        padding: '8px 0px',
        '&:hover': {
            // backgroundColor: 'red',
            border: '1px solid black',
        },
    },
    cartText: {
        paddingTop: '10px',
    },
    sellerText: {
        paddingTop: '10px',
        paddingRight: '30px'
    },
    threeDotUl: {
        margin: '35px -10px',
    },
    threeDotListItem: {
        listStyle: 'none',
        padding: '10px',
        '&:hover': {
            backgroundColor: '#fcf3f3'
        },
    },
    ul: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 0px',
        // '&:hover': {
        //     backgroundColor: 'red',
        // },
    },
    mainList: {
        width: '100%',
        // padding: '10px 0px',
        paddingTop: '12px',
        paddingBottom: '12px',
        paddingLeft: '5px',
        backgroundColor: 'white',
        // margin: '10px 0px',
        // '&.active': {
        //     backgroundColor: 'red',
        // },
        '&:hover': {
            // color: 'red',
            backgroundColor: '#f6f3f3 !important',
        },
    },
    li: {
        width: '100%',
        fontSize: '.90rem',
        padding: '10px 0px',
        textDecoration: 'none',
        margin: '-12px 13px'
        // '&:hover': {
        //     backgroundColor: 'red',
        // },
    },
    drawerHeading: {
        width: '100%',
        backgroundColor: '#6565d3',
        color: 'white',
        fontWeight: '600',
        padding: '13px 10px',
        margin: '-20px -10px -5px -10px',
    },
    drawerHeadingLogo: {
        width: '22px',
        height: '22px',
        margin: '-5px 0px',
        marginLeft: '70px',
    },
    drawerLogo: {
        fontSize: '1rem',
        color: 'grey',
    },
    '@media screen and (min-width: 1024px) and (max-width: 1440px)': {
        headerBody: {
            width: '100%',
            padding: '12px 10px',
        },
        searchBar: {
            // width: '42%',
        },
        headerButton: {
            width: '50%',
            justifyContent: 'right',
            marginRight: '20px',
            // marginLeft: 'auto',
        },
        individualBtn: {
            padding: '0px 7px',
        },
        sellerText: {
            paddingRight: '00px',
        }
    },
    '@media screen and (min-width: 768px) and (max-width: 1023px)': {
        headerBody: {
            width: '100%',
        },
        logo: {
            height: '40px',
            marginLeft: '-30px',
            marginRight: '20px'
        },
        searchBar: {
            width: '55%',
        },
        headerButton: {
            width: '40%',
            marginLeft: 'auto',
        },
        individualBtn: {
            padding: '0px 7px'
        },
        cartText: {
            display: 'none',
        },
        sellerText: {
            display: 'none',
        },
    },
    '@media screen and (min-width: 300px) and (max-width: 767px)': {
        headerBody: {
            width: '100%',
            justifyContent: 'space-between',
        },
        Menubar: {
            display: 'block',
            zIndex: 5,
        },
        logo: {
            marginRight: 'auto',
            marginLeft: '-35px'
        },
        searchBar: {
            display: 'none',
        },
        headerButton: {
            width: '50%',
            justifyContent: 'right'
            // paddingLeft: '230px',
        },
        individualBtn: {
            textAlign: 'right',
            padding: '0px 0px',
        },
        individualOtherBtn: {
            display: 'none',
        },
        cartText: {
            display: 'none',
        },
        sellerText: {
            display: 'none',
        },
        loginUl: {
            margin: '35px -10px'
        }
    },
})


class Header extends HeaderController {
    constructor(props) {
        super(props)
        this.state = {
            left: false,
            drawer: false,
            color: false,
        }
    }

    handleOpen = () => {
        this.setState({ drawer: true })
    }

    handleClose = (event) => {
        console.log(event.currentTarget.value)
        this.setState({ drawer: false })
        // if (this.state.color === false) {
        // this.setState({ color: true})
        // }
    }

    render() {
        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popper' : undefined;

        const open2 = Boolean(this.state.anchorEl2);
        const id2 = open ? 'simple-popper' : undefined;

        const { classes } = this.props;
        return (
            <Box className={classes.headerBody}>
                <Box className={classes.Menubar} onClick={this.handleOpen}>
                    <Menu fontSize='large' />
                </Box>
                <SwipeableDrawer anchor='left' open={this.state.drawer} onClose={this.handleClose} style={{ left: '-20px' }}>
                    <Box style={{ width: '280px', textAlign: 'left', padding: '20px 10px', }}>
                        <Box className={classes.drawerHeading}><AccountCircle style={{ margin: '-6px 5px -6px 0px' }} /> Login & Signup
                            <img className={classes.drawerHeadingLogo} src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png' alt='flipkartLogo' />
                        </Box>
                        <Box>
                            <ul className={classes.ul}>
                                <li className={classes.mainList} style={{ display: 'flex', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={1}>
                                    <Assistant className={classes.drawerLogo}/>
                                    <NavLink to='/' className={classes.li}>SuperCoin Zone</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', borderBottom: '1px solid #c5d0d1', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={2}>
                                    <Star className={classes.drawerLogo}/>
                                    <NavLink to='/crud' className={classes.li}>Flipkart Plus Zone</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={3}>
                                <Category className={classes.drawerLogo}/>    
                                <NavLink to='/parkingapp' className={classes.li}>All Categories</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={4}>
                                <Storefront className={classes.drawerLogo}/>   
                                <NavLink to='/randomcolor' className={classes.li}>Trending Stores</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', borderBottom: '1px solid #c5d0d1', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={5}>
                                <More className={classes.drawerLogo}/>    
                                <NavLink to='/quiz' className={classes.li}>More on  Flipkart</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', borderBottom: '1px solid #c5d0d1', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={6}>
                               <GTranslate className={classes.drawerLogo}/>
                                <NavLink to='/anotherquiz' className={classes.li}>Choose Language</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={6}>
                                <LocalOffer className={classes.drawerLogo}/>  
                                <NavLink to='/loginform' className={classes.li}>Offer Zone</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', borderBottom: '1px solid #c5d0d1', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={6}>
                                <LocalMall className={classes.drawerLogo}/>
                                <NavLink to='/loginform' className={classes.li}>Sell on Flipkart</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={6}>
                                <CardTravel className={classes.drawerLogo}/>    
                                <NavLink to='/loginform' className={classes.li}>My Orders</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={6}>
                                <Forum className={classes.drawerLogo}/>  
                                <NavLink to='/loginform' className={classes.li}>Coupons</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={6}>
                                <ShoppingCart className={classes.drawerLogo}/>  
                                <NavLink to='/loginform' className={classes.li}>My Cart</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={6}>
                                <Favorite className={classes.drawerLogo}/>   
                                <NavLink to='/loginform' className={classes.li}>My Wishlist</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={6}>
                                <AccountCircle className={classes.drawerLogo}/> 
                                <NavLink to='/loginform' className={classes.li}>My Account</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', borderBottom: '1px solid #c5d0d1', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={6}>
                                <Notifications className={classes.drawerLogo}/> 
                                <NavLink to='/loginform' className={classes.li}>My Notifications</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={6}>
                                    <NavLink to='/loginform' className={classes.li} style={{margin: '0px 3px', padding: '0px'}}>Notification Preferences</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={6}>
                                    <NavLink to='/loginform' className={classes.li} style={{margin: '0px 3px', padding: '0px'}}>Help Centre</NavLink>
                                </li>
                                <li className={classes.mainList} style={{ display: 'flex', backgroundColor: this.state.color === true ? 'red' : 'white' }} onClick={this.handleClose} value={6}>
                                    <NavLink to='/loginform' className={classes.li} style={{margin: '0px 3px', padding: '0px 0px'}}>Legal</NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </SwipeableDrawer>
                <Box className={classes.logo}>
                    <img className={classes.logoImg} src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg' alt='flipkartLogo' />
                </Box>
                <Box className={classes.searchBar}>
                    <FormControl className={classes.inputSearch}>
                        <Input className={classes.inn}
                            // style = {{border: 'none', outline: 'none',backgroundColor: 'e4feff'}}   
                            placeholder='Search for Products, Brands and More'
                            startAdornment={
                                <InputAdornment position="start">
                                    <Search />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Box>
                <Box className={classes.headerButton}>
                    <Box className={classes.individualBtn}
                        onMouseOver={this.handleLoginHover}
                        aria-describedby={id}
                    >
                        <Box style={{ marginTop: '-5px', }}>
                            <IconButton
                                color="inherit"
                            >
                                <AccountCircle
                                />
                            </IconButton>
                        </Box>
                        <Box style={{ paddingTop: '10px' }} className={classes.individualOtherBtn}>Login</Box>
                        <Box style={{ padding: '8px 6px' }} className={classes.individualOtherBtn}><KeyboardArrowDown fontSize='small' /></Box>
                    </Box>
                    <Popover className={classes.loginUl}
                        // style={{width: '120px'}}
                        id={id2}
                        open={open2}
                        anchorEl={this.state.anchorEl2}
                        onClose={this.handleLoginClose}>
                        <ul style={{ width: '250px', padding: '5px' }}>
                            <Box style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderBottom: '1px solid black',
                                padding: '14px'
                            }}>
                                <Box>New Customer?</Box>
                                <Box style={{ fontWeight: '800', color: 'blue' }}>Sign Up</Box>
                            </Box>
                            <li className={classes.LoginList}><AccountCircle fontSize='small' style={{ margin: '-5px 10px' }} />My Profile</li>
                            <li className={classes.LoginList}><Star fontSize='small' style={{ margin: '-5px 10px' }} />Flipkart Plus Zone</li>
                            <li className={classes.LoginList}><CardTravel fontSize='small' style={{ margin: '-5px 10px' }} />Orders</li>
                            <li className={classes.LoginList}><Favorite fontSize='small' style={{ margin: '-5px 10px' }} />Wishlists</li>
                            <li className={classes.LoginList}><Redeem fontSize='small' style={{ margin: '-5px 10px' }} />Rewards</li>
                            <li className={classes.LoginList}><CardMembership fontSize='small' style={{ margin: '-5px 10px' }} />Gift Cards</li>
                        </ul>
                    </Popover>
                    <Box className={classes.individualBtn}>
                        <Box style={{ marginTop: '-5px' }}>
                            <IconButton
                                color="inherit"
                            >
                                <ShoppingCart />
                            </IconButton>
                        </Box>
                        <Box className={classes.cartText}>Cart</Box>
                    </Box>
                    <Box className={`${classes.individualBtn} ${classes.individualOtherBtn}`}>
                        <Box style={{ marginTop: '-5px' }}>
                            <IconButton
                                color="inherit"
                            >
                                <Storefront />
                            </IconButton>
                        </Box>
                        <Box className={classes.sellerText}>Become a Seller</Box>
                    </Box>
                    <Box className={classes.threeDots}
                        // aria-aria-describedby={id}
                        onMouseOver={this.handleHover}
                    >
                        <MoreVert fontSize='small' />
                    </Box>
                    <Popover className={classes.threeDotUl}
                        // style={{width: '120px'}}
                        id={id}
                        open={open}
                        anchorEl={this.state.anchorEl}
                        onClose={this.handleClose}>
                        <ul style={{ width: '250px', padding: '5px' }}>
                            <li className={classes.threeDotListItem}><Notifications style={{ margin: '-5px 5px' }} /> Notification Preferences</li>
                            <li className={classes.threeDotListItem}><HeadsetMic style={{ margin: '-5px 5px' }} />24x7 Customer Care</li>
                            <li className={classes.threeDotListItem}><TrendingUp style={{ margin: '-5px 5px' }} />Advertise</li>
                            <li className={classes.threeDotListItem}><GetApp style={{ margin: '-5px 5px' }} />Download App</li>
                        </ul>
                    </Popover>
                </Box>
            </Box>
        )
    }
}
export default withStyles(style)(Header)

// import { Box, Button, ThemeProvider, makeStyles } from '@material-ui/core'
// import React, { Component } from 'react'

// const style = createTheme({
//     // '&$i'
//     MuiButtonContained: {
//         backgroundColor: red,
//     }
//     // .MuiButton-label
//     // .MuiButton-contained
// })

// export default class Header extends Component {
//     render() {
//         return (
//             <ThemeProvider theme={{ theme }}>
//                 <Box style={{ margin: '25px auto', textAlign: 'center' }}>
//                     <Button variant='contained'>Jayy</Button>
//                 </Box>
//             </ThemeProvider>
//         )
//     }
// }
