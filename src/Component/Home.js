import React, { Component } from 'react';
import HeroSectionCarousel from './HeroSectionCarousel';
import { Box, withStyles } from '@material-ui/core';
import ProductCarousel from './ProductCarousel';
import SquareProductList from './SquareProductList';

const style = ({
    homeFlexBackground: {
        width: '100%',
        backgroundColor: '#f9f0f0',
        padding: '10px',
    },
    homeFlex: {
        width: '85%',
        display: 'flex',
        justifyContent: 'space-between',
        margin: 'auto',
        padding: '0px 6px'
    },
    homeAdvertiseMainImage: {
        width: '100%',
        // objectFit: 'cover',
        margin: '0px 5px 10px',
    },
    homeAdvertiseImgBody: {
        width: '100%',
        height: '647px',
        // height: '80%',
        margin: 'auto',
        // margin: '0px 5px 10px',
    },
    homeAdvertiseImg: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    '@media screen and (min-width:1024px) and (max-width:1439px)': {
        homeFlex: {
            width: '88.4%',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
    },
    '@media screen and (min-width:768px) and (max-width:1023px)': {
        homeFlex: {
            width: '88.3%',
            flexWrap: 'wrap'
        },
    },
    '@media screen and (min-width:300px) and (max-width:767px)': {
        homeFlex: {
            // width: '',
            flexWrap: 'wrap',
        },
    },
});

class Home extends Component {
    render() {
        const { classes } = this.props
        return (
            <Box className={classes.random} data-testid="random">
                <HeroSectionCarousel />
                <ProductCarousel image={'https://rukminim2.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70'} headingTitle={'Best of Electronics'} />
                <ProductCarousel image={'https://rukminim2.flixcart.com/image/612/612/kufuikw0/book/x/s/w/atomic-habits-original-imag7kbzg2fu8rjv.jpeg?q=70'} headingTitle={'Beauty, Food, Toys & more'} />
                <ProductCarousel image={'https://rukminim2.flixcart.com/image/416/416/xif0q/coffee/s/r/d/190-gold-190gm-imported-glass-bottle-1-roast-ground-coffee-original-imagrs3chyetab5n.jpeg?q=70'} headingTitle={'Sports, Healthcare & more'} />
                <Box className={classes.homeFlexBackground}>
                    <Box className={classes.homeFlex} data-testid="homeFlex">
                        <SquareProductList headingTitle={'Gifting Collection for You'} />
                        <SquareProductList headingTitle={'Winter Best Buys'} />
                        <SquareProductList headingTitle={'Winter Special Offers'} />
                    </Box>
                </Box>
                <ProductCarousel image={'https://rukminim2.flixcart.com/image/416/416/xif0q/coffee/s/r/d/190-gold-190gm-imported-glass-bottle-1-roast-ground-coffee-original-imagrs3chyetab5n.jpeg?q=70'} headingTitle={'Sports, Healthcare & more'} />
                <Box className={classes.homeFlexBackground}>
                    <Box className={classes.homeFlex} data-testid="homeFlex">
                        <SquareProductList headingTitle={'End of Season Bestsellers'} />
                        <SquareProductList headingTitle={'Top Picks for Kitchen Makeover'} />
                        <Box className={classes.homeAdvertiseMainImage}>
                            <Box className={classes.homeAdvertiseImgBody}>
                                <img className={classes.homeAdvertiseImg} src='https://images.freeimages.com/image/previews/9f6/socialpost-light-5690375.jpg' alt='Advertise' />
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <ProductCarousel image={'https://rukminim2.flixcart.com/image/416/416/xif0q/coffee/s/r/d/190-gold-190gm-imported-glass-bottle-1-roast-ground-coffee-original-imagrs3chyetab5n.jpeg?q=70'} headingTitle={'Pick Your Styles'} />
            </Box>
        )
    }
}

export default withStyles(style)(Home)