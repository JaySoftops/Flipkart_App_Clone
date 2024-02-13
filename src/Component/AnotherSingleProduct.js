import { Box, withStyles } from '@material-ui/core'
import React, { Component } from 'react'

const style = ({
    // singleProBody: {
    //     display: 'flex',
    //     // justifyContent: 'flex-start'
    // },
    anotherSinglePro: {
        // width: '230px',
        width: '180px',
        height: '270px',
        flex: '1',
        border: '1px solid #eedfdf',
        borderRadius: '5px',
        margin: '10px 5px',
        // margin: '10px auto',
        padding: '15px 5px',
    },
    anotherSingleProImage: {
        // width: '80%',
        width: '132px',
        height: '136px',
        margin: 'auto',
        padding: '10px 0px',
        margin: '10px auto',
        '&:hover': {
            width: '140px',
            height: '150px',
            margin: '-2px auto',
        },
    },
    anotherSingleProImg: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        objectFit: 'contain',
    },
    anotherSingleProTitle: {
        margin: '10px auto 5px 0px'
    },
    '@media screen and (min-width:1024px) and (max-width:1440px)': {
    },
})

class AnotherSingleProduct extends Component {
    render() {
        const { classes } = this.props
        return (
            // <Box className={classes.singleProBody}>
            <Box className={classes.anotherSinglePro}>
                <Box className={classes.anotherSingleProImage}>
                    <img className={classes.anotherSingleProImg} src={this.props.anotherImage} alt='Title' />
                </Box>
                <Box className={classes.anotherSingleProTitle}>Title</Box>
                <Box className={classes.anotherSingleProMrp}>MRP. {this.props.Rs}</Box>
            </Box>
            // </Box>
        )
    }
}

export default withStyles(style)(AnotherSingleProduct)