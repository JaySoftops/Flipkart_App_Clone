import { Box, styled, withStyles } from '@material-ui/core'
import { ArrowForwardIos, Settings } from '@material-ui/icons'
import React, { Component } from 'react'
import Slider from 'react-slick'
import { MyContext } from '../Context/Contexts'
import SingleProduct from './SingleProduct'
import { Skeleton } from '@material-ui/lab'
import { NavLink } from 'react-router-dom'

const style = ({
    productBody: {
        width: '100%',
        backgroundColor: '#f9f0f0',
        padding: '8px 0px 5px 0px',
        // zIndex: '3'
        // margin: '15px auto',
    },
    productWidth: {
        width: '83%',
        // height: '220px',
        // zIndex: '3',
        margin: '5px auto 0px',
        padding: '15px 0px 25px',
        backgroundColor: 'white',
    },
    productHeading: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5px 15px',
    },
    productHeadingTitle: {
        fontSize: '1.2rem',
        fontWeight: '700',
    },
    productHeadingIcon: {
        height: '100%',
        fontSize: '5px',
        color: 'white',
        backgroundColor: 'blue',
        borderRadius: '50%',
        padding: '4px 3px 2px 4px'
    },
    ProductCarouselSlider: {
        '& .slick-slide': {
            padding: "0 10px !important"
        },
        '& .slick-track': {
            // padding: '0px',
            margin: '0px',
            display: 'flex',
        },
    },
    singlePro: {
        // width: '200px',
        height: '270px',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #eedfdf',
        borderRadius: '5px',
        // margin: '10px 10px',
        padding: '15px 5px',
    },
    singleProImage: {
        // width: '80%',
        width: '112px',
        height: '116px',
        margin: 'auto',
        padding: '10px 0px',
        margin: '10px auto',
        // '&:hover': {
        //     // width: '140px',
        //     // height: '150px',
        //     // margin: '-2px auto',
        // },
    },
    singleProImg: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        objectFit: 'contain',
        '&:hover': {
            transform: 'scale(1.1)', /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
            // width: '120%',
            // height: '110%',
            // objectPosition: '40px -20px',
        },
    },
    singleProTitle: {
        margin: '10px auto 5px 0px'
    },
})

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                width: '40px',
                height: '100px',
                padding: '40px 10px',
                display: "block",
                background: "#eee3e3",
                color: 'black',
                right: '0px',
                zIndex: '2',
                borderTopLeftRadius: '3px',
                borderBottomLeftRadius: '3px',
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                width: '40px',
                height: '100px',
                padding: '40px 10px',
                display: "block",
                background: "#eee3e3",
                color: 'white',
                left: '0px',
                zIndex: '2',
                borderTopRightRadius: '3px',
                borderBottomRightRadius: '3px',
            }}
            onClick={onClick}
        />
    );
}

function SmallNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                width: '40px',
                height: '80px',
                padding: '30px 10px',
                display: "block",
                background: "#eee3e3",
                color: 'black',
                right: '0px',
                zIndex: '2',
                borderTopLeftRadius: '3px',
                borderBottomLeftRadius: '3px',
            }}
            onClick={onClick}
        />
    );
}

function SmallPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                width: '40px',
                height: '80px',
                padding: '30px 10px',
                display: "block",
                background: "#eee3e3",
                color: 'white',
                left: '0px',
                zIndex: '2',
                borderTopRightRadius: '3px',
                borderBottomRightRadius: '3px',
            }}
            onClick={onClick}
        />
    );
}

class ProductCarousel extends Component {
    static contextType = MyContext

    render() {
        const { classes } = this.props
        const output = this.context

        const settings = {
            // arrows:false,
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 8,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            // autoplay: true,
            // autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 6,
                        infinite: true,
                        // dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        // dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        // dots: true,
                        nextArrow: <SmallNextArrow />,
                        prevArrow: <SmallPrevArrow />,
                    }
                },
            ]
        }

        return (
            <Box className={classes.productBody}>
                <Box className={classes.productWidth}>
                    <Box className={classes.productHeading}>
                        <Box className={classes.productHeadingTitle}>{this.props.headingTitle}</Box>
                        <Box className={classes.productHeadingIcon}>
                            <ArrowForwardIos fontSize='small' />
                        </Box>
                    </Box>
                    <Slider {...settings} className={classes.ProductCarouselSlider}>
                        {
                            // <Box className={classes.again} style={{display: 'flex', flexDirection: 'row'}}>
                            //         <Skeleton animation='wave' height={70} />
                                    
                            //     </Box>
                            (output.isLoading === true)
                                // ? <Box>Loading...</Box>
                                ? <Box style={{display: 'flex', flexDirection: 'row'}}>
                                    <Skeleton animation='wave' height={70} width='80%' />
                                    <Skeleton animation='wave' height={70} width='80%' />
                                </Box>
                                : (
                                    output.getData.map((item) => {
                                        return (
                                            <NavLink to='/singleProductDetail' className={classes.singlePro}>
                                                <Box className={classes.singleProImage}>
                                                    <img className={classes.singleProImg} src={item.image} alt='Title' />
                                                </Box>
                                                <Box className={classes.singleProTitle}>{item.title}</Box>
                                                <Box className={classes.singleProMrp}>MRP. {item.price}</Box>
                                            </NavLink>
                                        )
                                    })
                                )
                        }
                    </Slider>
                </Box>
            </Box>
        )
    }
}
export default withStyles(style)(ProductCarousel)