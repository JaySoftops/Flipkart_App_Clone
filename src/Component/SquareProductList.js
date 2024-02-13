import { Box, withStyles } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'
import React, { Component } from 'react'
import Slider from 'react-slick'
import AnotherSingleProduct from './AnotherSingleProduct'

const style = ({
    squareBody: {
        width: '100%',
        // width: '522px',
        backgroundColor: '#f9f0f0',
        // padding: '10px',
        margin: '0px 5px 10px',
    },
    squareMidBody: {
        // height: '320px',
        // width: '83%',
        backgroundColor: 'white',
        margin: 'auto',
        padding: '10px',
    },
    squareHeading: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 5px'
    },
    squareHeadingTitle: {
        fontSize: '1.2rem',
        fontWeight: '700',
    },
    squareProductList: {
        display: 'flex',
    },
    squareIcon: {
        fontSize: '5px',
        color: 'white',
        backgroundColor: 'blue',
        borderRadius: '50%',
        padding: '4px 3px 2px 4px'
    },
    '@media screen and (min-width:1440px)': {
        squareBody: {
            width: '100%',
        }
    },
    '@media screen and (min-width:1024px) and (max-width:1439px)': {
        squareBody: {
            width: '48%',
            margin: '0px 5px 10px',
        },
    },
    '@media screen and (min-width:300px) and (max-width:767px)': {
        squareProductList: {
            flexWrap: 'wrap',
            justifyContent: 'space-between'
        },
        squareIcon: {
            margin : '0px 0px 17px 0px'
            // padding: '4px 3px -3px 4px'
        },
    },
})

class SquareProductList extends Component {
    render() {
        const { classes } = this.props

        return (
            <Box className={classes.squareBody}>
                <Box className={classes.squareMidBody}>
                    <Box className={classes.squareHeading}>
                        <Box className={classes.squareHeadingTitle}>{this.props.headingTitle}</Box>
                        <Box className={classes.squareIcon}>
                            <ArrowForwardIos fontSize='small' />
                        </Box>
                    </Box>
                    <Box className={classes.squareProductList}>
                        <AnotherSingleProduct anotherImage={'https://rukminim2.flixcart.com/image/612/612/kufuikw0/book/x/s/w/atomic-habits-original-imag7kbzg2fu8rjv.jpeg?q=70'} />
                        <AnotherSingleProduct anotherImage={'https://rukminim2.flixcart.com/image/210/210/kzzw5u80/coffee/s/b/x/-original-imagbwf3wvhzfh5z.jpeg?q=80'}/>
                    </Box>
                    <Box className={classes.squareProductList}>
                        <AnotherSingleProduct anotherImage={'https://rukminim2.flixcart.com/image/250/250/xif0q/headphone/h/d/6/nb119-titanium-48-hours-playtime-bluetooth-neckband-aroma-original-imaghrcbugpcnzeb.jpeg?q=80'}/>
                        <AnotherSingleProduct anotherImage={'https://rukminim2.flixcart.com/image/250/250/xif0q/shoe/s/m/z/10-wave-black-10-arivo-black-white-original-imagu2sk4az9edw4.jpeg?q=80'}/>
                    </Box>
                </Box>
            </Box>
        )
    }
}
export default withStyles(style)(SquareProductList)