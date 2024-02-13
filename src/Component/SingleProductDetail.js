import { Box, Button, withStyles } from '@material-ui/core'
import { Favorite } from '@material-ui/icons'
import React, { Component } from 'react'
import { MyContext } from '../Context/Contexts'
import { Skeleton } from '@material-ui/lab'

const style = ({
    singleProductDetailMainBody: {
        width: '100%',
        backgroundColor: '#f9f0f0',
    },
    singleProductDetailBody: {
        width: '83%',
        height: '700px',
        display: 'flex',
        backgroundColor: 'white',
        margin: 'auto',
    },
    singleProductDetailImageSection: {
        width: '40%',
        // height: '700px',
    },
    singleProductDetailImages: {
        display: 'flex',
    },
    singleProductDetailSingleImgBody: {
        width: '60px',
        height: '60px',
        // objectFit: 'cover',
    },
    singleProductDetailSingleImage: {
        width: '100%',
        height: '100%',
        // objectFit: 'cover',
    },
    singleProductDetailSingleMainImageBody: {
        width: '450px',
        height: '450px',
        margin: 'auto',
        position: 'relative',
    },
    singleProductDetailSingleMainImg: {
        width: '100%',
        height: '100%',
        padding: '10px',
        position: 'absolute',
        top: '0',
        right: '0',
        // objectFit: 'contain',
    },
    singleProductDetailImageButton: {
        paddingLeft: '120px'
    },
    singleProductDetailContentSection: {
        width: '60%',
    },
})

class SingleProductDetail extends Component {
    static contextType = MyContext
    render() {
        const { classes } = this.props
        const data = this.context
        console.log(data)
        return (
            <Box className={classes.singleProductDetailMainBody}>
                {
                    (data.isLoading === true)
                        ? <Box style={{ display: 'flex', flexDirection: 'row' }}>
                            <Skeleton animation='wave' height={70} width='80%' />
                            <Skeleton animation='wave' height={70} width='80%' />
                        </Box>
                        :
                        // : (
                        //     data.getData.map((data) => {
                        // return (
                        <Box className={classes.singleProductDetailBody}>
                            <Box className={classes.singleProductDetailImageSection}>
                                <Box className={classes.singleProductDetailImages}>
                                    <Box className={classes.singleProductDetailImageList}>
                                        <Box className={classes.singleProductDetailSingleImgBody}>
                                            <img src={data.getData[0].image} className={classes.singleProductDetailSingleImage} alt='dfd' />
                                        </Box>
                                        <Box className={classes.singleProductDetailSingleImgBody}>
                                            <img src={data.getData[0].image} className={classes.singleProductDetailSingleImage} alt='dfd' />
                                        </Box>
                                        <Box className={classes.singleProductDetailSingleImgBody}>
                                            <img src={data.getData[0].image} className={classes.singleProductDetailSingleImage} alt='dfd' />
                                        </Box>
                                    </Box>
                                    <Box className={classes.singleProductDetailSingleMainImageBody}>
                                        <img src={data.getData[0].image} className={classes.singleProductDetailSingleMainImg} alt='dfd' />
                                        <Button><Favorite /></Button>
                                    </Box>
                                </Box>
                                <Box className={classes.singleProductDetailImageButton}>
                                    <Button>ADD TO CART</Button>
                                    <Button>BUY NOW</Button>
                                </Box>
                            </Box>
                            <Box className={classes.singleProductDetailContentSection}>Content Section</Box>
                        </Box>
                    //     )
                    // })
                    // )
                }
            </Box>
        )
    }
}

export default withStyles(style)(SingleProductDetail)