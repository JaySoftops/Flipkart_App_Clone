import { Box, withStyles } from '@material-ui/core'
import { Copyright, HelpOutline, Redeem, Storefront, TrendingUp } from '@material-ui/icons';
import React, { Component } from 'react'
import { MyContext } from '../Context/Contexts';

const style = ({
    footerBody: {
        width: '100%',
        backgroundColor: '#1f1d1d',
        color: '#fff',
        // padding: '35px 30px',
        fontSize: '.80rem',
    },
    footerFirstBody: {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '30px 30px 42px',
        borderBottom: '.002rem solid rgb(55 75 80)',
        // margin: '-10px'
    },
    footerBoxes: {
        flexGrow: 1,
        paddingLeft: '30px',
    },
    footerBoxesHeading: {
        color: 'grey',
        margin: '10px 0px',
        fontWeight: '600',
    },
    footerBoxesList: {
        listStyle: 'none',
        fontSize: '.75rem',
        fontWeight: '700',
        padding: '1.5px 0px'
    },
    footerAddress: {
        display: 'flex',
        flexGrow: '.010',
        borderLeft: '1px solid rgb(55 75 80)'
    },
    footerSecondBody: {
        display: 'flex',
        justifyContent: 'center',
        padding: '15px 20px',
    },
    footerSecondBoxesList: {
        display: 'flex',
        padding: '10px 25px',
    },
    footerSecondIcon: {
        color: 'red',
        fontSize: '.9rem',
        marginRight: '5px'
    },
    footerSecondHeading: {
        color: 'white',
        fontSize: '.72rem',
        fontWeight: '600'
    },
    '@media screen and (min-width:1024px) and (max-width:1439px)': {
        footerFirstBody: {
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            // padding: '30px 30px 42px',
        },
        footerBoxes: {
            padding: '10px 30px 10px',
        },
        footerAddress: {
            borderLeft: 'none',
            margin: 'auto',
        },
        footerSecondBody: {
            flexWrap: 'wrap',
        },
    },
    '@media screen and (min-width:768px) and (max-width:1023px)': {
        footerFirstBody: {
            flexWrap: 'wrap',
        },
        footerBoxes: {
            padding: '10px 18px'
        },
        footerAddress: {
            borderLeft: 'none',
            margin: 'auto',
        },
        footerSecondBody: {
            flexWrap: 'wrap',
        },
    },
    '@media screen and (min-width:300px) and (max-width:767px)': {
        footerFirstBody: {
            flexDirection: 'column',
        },
        footerBoxes: {
            padding: '15px 0px 0px'
        },
        footerAddress: {
            borderLeft: 'none',
            flexDirection: 'column',
        },
        footerSecondBody: {
            flexDirection: 'column',
            alignItems: 'center'
        },
        // footerCopy: {
        //     width: '70px',
        //     // display: 'block',
        //     textAlign: 'center',
        //     margin: '2px auto',
        // },
        footerSecondImage: {
            width: '100%',
        },
    },
})

class Footer extends Component {
    // static contextType = MyContext
    render() {
        const { classes } = this.props;

        // console.log(this.context.getData)
        return (
            <Box className={classes.footerBody}>
                <Box className={classes.footerFirstBody}>
                    <Box className={classes.footerBoxes}>
                        <Box className={classes.footerBoxesHeading}>ABOUT</Box>
                        <ul className={classes.foooterBoxesUl}>
                            <li className={classes.footerBoxesList}>Contact Us</li>
                            <li className={classes.footerBoxesList}>About Us</li>
                            <li className={classes.footerBoxesList}>Careers</li>
                            <li className={classes.footerBoxesList}>Flipkart Stories</li>
                            <li className={classes.footerBoxesList}>Press</li>
                            <li className={classes.footerBoxesList}>Flipkart Wholesale</li>
                            <li className={classes.footerBoxesList}>Cleartrip</li>
                            <li className={classes.footerBoxesList}>Corporate Information</li>
                        </ul>
                    </Box>
                    <Box className={classes.footerBoxes}>
                        <Box className={classes.footerBoxesHeading}>HELP</Box>
                        <ul className={classes.foooterBoxesUl}>
                            <li className={classes.footerBoxesList}>Payments</li>
                            <li className={classes.footerBoxesList}>Shipping</li>
                            <li className={classes.footerBoxesList}>Cancellation & Returns</li>
                            <li className={classes.footerBoxesList}>FAQ</li>
                            <li className={classes.footerBoxesList}>Report Infringement</li>
                        </ul>
                    </Box>
                    <Box className={classes.footerBoxes}>
                        <Box className={classes.footerBoxesHeading}>CONSUMER POLICY</Box>
                        <ul className={classes.foooterBoxesUl}>
                            <li className={classes.footerBoxesList}>Cancellation & Returns</li>
                            <li className={classes.footerBoxesList}>Terms Of Use</li>
                            <li className={classes.footerBoxesList}>Security</li>
                            <li className={classes.footerBoxesList}>Privacy</li>
                            <li className={classes.footerBoxesList}>Sitemap</li>
                            <li className={classes.footerBoxesList}>Grievance Redressal</li>
                            <li className={classes.footerBoxesList}>EPR Compliance</li>

                        </ul>
                    </Box>
                    <Box className={classes.footerBoxes}>
                        <Box className={classes.footerBoxesHeading}>SOCIAL</Box>
                        <ul className={classes.foooterBoxesUl}>
                            <li className={classes.footerBoxesList}>Facebook</li>
                            <li className={classes.footerBoxesList}>Twitter</li>
                            <li className={classes.footerBoxesList}>YouTube</li>
                        </ul>
                    </Box>
                    <Box className={classes.footerAddress}>
                        <Box className={classes.footerBoxes}>
                            <Box className={classes.footerBoxesHeading}>Mail Us:</Box>
                            <ul className={classes.foooterBoxesUl}>
                                <li className={classes.footerBoxesList}>Flipkart Internet Private Limited, </li>
                                <li className={classes.footerBoxesList}> Buildings Alyssa, Begonia & </li>
                                <li className={classes.footerBoxesList}> Clove Embassy Tech Village, </li>
                                <li className={classes.footerBoxesList}> Outer Ring Road, Devarabeesanahalli Village, </li>
                                <li className={classes.footerBoxesList}> Bengaluru, 560103, </li>
                                <li className={classes.footerBoxesList}> Karnataka, India</li>
                            </ul>
                        </Box>
                        <Box className={classes.footerBoxes}>
                            <Box className={classes.footerBoxesHeading}>Registered Office Address:</Box>
                            <ul className={classes.foooterBoxesUl}>
                                <li className={classes.footerBoxesList}>Flipkart Internet Private Limited, </li>
                                <li className={classes.footerBoxesList}> Buildings Alyssa, Begonia & </li>
                                <li className={classes.footerBoxesList}> Clove Embassy Tech Village, </li>
                                <li className={classes.footerBoxesList}> Outer Ring Road, Devarabeesanahalli Village, </li>
                                <li className={classes.footerBoxesList}> Bengaluru, 560103, </li>
                                <li className={classes.footerBoxesList}> Karnataka, India </li>
                                <li className={classes.footerBoxesList}> CIN : U51109KA2012PTC066107 </li>
                                <li className={classes.footerBoxesList}> Telephone: <span style={{ color: '#3750d9' }}>044-45614700</span></li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.footerSecondBody}>
                    <Box className={classes.footerSecondBoxesList}>
                        <Storefront className={classes.footerSecondIcon} fontSize='small' />
                        <Box className={classes.footerSecondHeading}>Become a Seller</Box>
                    </Box>
                    <Box className={classes.footerSecondBoxesList}>
                        <TrendingUp className={classes.footerSecondIcon} fontSize='small' />
                        <Box className={classes.footerSecondHeading}>Advertise</Box>
                    </Box>
                    <Box className={classes.footerSecondBoxesList}>
                        <Redeem className={classes.footerSecondIcon} fontSize='small' />
                        <Box className={classes.footerSecondHeading}>Gift Cards</Box>
                    </Box>
                    <Box className={classes.footerSecondBoxesList}>
                        <HelpOutline className={classes.footerSecondIcon} fontSize='small' />
                        <Box className={classes.footerSecondHeading}>Help Center</Box>
                    </Box>
                    <Box className={classes.footerSecondBoxesList}>
                        <Copyright className={classes.footerSecondIcon} fontSize='small' />
                        <Box className={classes.footerSecondHeading}><span className={classes.footerCopy}>2007-2024</span>FlipkartAppCloneByJaiPrakash.com
                        </Box>
                    </Box>
                    <Box className={classes.footerSecondBoxesList}>
                        <img className={classes.footerSecondImage} src='https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg' alt='cards' />
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default withStyles(style)(Footer)