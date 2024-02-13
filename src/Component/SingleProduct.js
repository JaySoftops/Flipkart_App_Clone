import { Box, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { MyContext } from '../Context/Contexts'

const style = ({
    // singleProBody: {
    //     display: 'flex',
    //     justifyContent: 'flex-start'
    // },
    singlePro: {
        // width: '200px',
        height: '270px',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #eedfdf',
        borderRadius: '5px',
        margin: '10px 10px',
        padding: '15px 5px',
    },
    singleProImage: {
        // width: '80%',
        width: '112px',
        height: '116px',
        margin: 'auto',
        padding: '10px 0px',
        margin: '10px auto',
        '&:hover': {
            width: '140px',
            height: '150px',
            margin: '-2px auto',
        },
    },
    singleProImg: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        objectFit: 'contain',
    },
    singleProTitle: {
        margin: '10px auto 5px 0px'
    },
})

class SingleProduct extends Component {
    static contextType = MyContext
    render() {
        const { classes } = this.props
        const output = this.context
        console.log(output,
            "##")
        // console.log(output.getData[25].title, output.isLoading)
        return (
            <Box className={classes.singleProBody}>
                {
                    (output.isLoading === true)
                        ? <Box>Loading...</Box>
                        : (
                            output.getData.map((item) => {
                                return (
                                    <Box className={classes.singlePro}>
                                        <Box className={classes.singleProImage}>
                                            <img className={classes.singleProImg} src={item.images[0]} alt='Title' />
                                        </Box>
                                        <Box className={classes.singleProTitle}>{item.title}</Box>
                                        <Box className={classes.singleProMrp}>MRP. {item.price}</Box>
                                    </Box>
                                )
                            })
                        )
                }
            </Box>
        )
    }
}

export default withStyles(style)(SingleProduct)