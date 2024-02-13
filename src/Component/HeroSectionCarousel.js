import { Box, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import Slider from 'react-slick'


const style = ({
    heroBody: {
        width: '100%',
        // backgroundColor: 'grey',
        backgroundColor: '#f9f0f0',
        padding: '8px 0px 4px 0px',
        // margin: 'auto',
    },
    heroCarouselSlider: {
        width: '83%',
        // height: '100%',
        backgroundColor: 'white',
        margin: '0px auto',
    },
    caroList: {
        width: '100%',
    },
    caroListImg: {
        width: '100%',
        height: '265px',
        objectFit: 'cover',
        objectPosition: 'center',
    },
    // nextArrow: {
    //     width: '40px',
    //             height: '100px',
    //             padding: '40px 10px',
    //             display: "block",
    //             background: "#eee3e3",
    //             color: 'black',
    //             right: '0px',
    //             zIndex: '2',
    //             borderTopLeftRadius: '3px',
    //             borderBottomLeftRadius: '3px',
    // },
    '@media screen and (min-width:300px) and (max-width:767px)': {
        heroCarouselSlider: {
            width: '100%',
        },
        caroListImg: {
            height: '100%'
        },
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
                width: '20px',
                height: '40px',
                padding: '10px 0px',
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
                width: '20px',
                height: '40px',
                padding: '10px 0px',
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


class HeroSectionCarousel extends Component {
    render() {
        const { classes } = this.props

        const settings = {
            // dots: true,
            // arrows:false,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        nextArrow: <SmallNextArrow />,
                        prevArrow: <SmallPrevArrow />,
                    }
                },
            ],
        }
        return (
            <Box className={classes.heroBody}>
                <Slider {...settings} className={classes.heroCarouselSlider}>
                    <Box className={classes.caroList}>
                        <img className={classes.caroListImg} src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ed12b7707a04473c.jpg?q=20' alt='airline' />
                    </Box>
                    <Box className={classes.caroList}>
                        <img className={classes.caroListImg} src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/3959ad9f670aeeeb.jpg?q=20' alt='airline2' />
                    </Box>
                    <Box className={classes.caroList}>
                        <img className={classes.caroListImg} src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/585a93b0ebfd39c2.jpg?q=20' alt='laptop' />
                    </Box>
                    <Box className={classes.caroList}>
                        <img className={classes.caroListImg} src='https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/8d309aca8653215e.jpg?q=20' alt='mobile' />
                    </Box>
                </Slider>
            </Box>
        )
    }
}
export default withStyles(style)(HeroSectionCarousel)