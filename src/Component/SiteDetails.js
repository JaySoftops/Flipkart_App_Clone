import { Box, Button, Switch, withStyles } from '@material-ui/core'
import React, { Component } from 'react'

const style = ({
    // sitedetailsBody: {
    //     width: '100%',
    //     backgroundColor: '#f9f0f0',
    //     padding: '20px 0px'
    // },
    sitedetailsMidBody: {
        // display: 'flex',
        backgroundColor: '#f5f5f5',
        margin: 'auto',
        padding: '20px 35px',
        color: '#878787',
    },
    sitedetailsTitle: {
        fontSize: '1.15rem',
        fontWeight: '700',
        color: '#867575',
    },
    sitedetailsList: {
        listStyle: 'none',
        margin: '15px 0px'
    },
    sitedetailsHeading: {
        fontSize: '.90rem',
        fontWeight: '500',
    },
    sitedetailsParagraph: {
        fontSize: '.80rem',
        margin: '5px 0px'
    },
    sitedetailsSwitch: {
        display: 'none'
    },
    sitedetailsHide: {
        display: 'block',
    },
    '@media screen and (min-width:300px) and (max-width:767px)': {
        sitedetailsFlex: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        sitedetailsTitle: {
            padding: '7px 0px'
        },
        sitedetailsHide: {
            display: 'none',
        },
        sitedetailsSwitch: {
            display: 'block',
        },
    },
})

class SiteDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedA: true,
        }
        this.ref = React.createRef(null)
    }

    handleChange = (event) => {
        if (this.state.checkedA === true) {
            // this.setState({ ...this.state.checkedA, [event.target.name]: event.target.checked });
            this.setState({ checkedA: false })
            this.ref.current.style.display = 'block'
        }
        else if (this.state.checkedA === false) {
            this.setState({ checkedA: true })
            this.ref.current.style.display = 'none'
        }
    }
    render() {
        const { classes } = this.props

        // console.log(this.state.checkedA)
        return (
            <Box className={classes.sitedetailsBody}>
                <Box className={classes.sitedetailsMidBody}>
                    <Box className={classes.sitedetailsFlex}>
                        <Box className={classes.sitedetailsTitle}>Site Details</Box>
                        <Box className={classes.sitedetailsSwitch}>
                            <Switch name='checkedA' color='primary' checked={this.state.checkedA}
                                onChange={this.handleChange}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </Box>
                    </Box>
                    <Box ref={this.ref} className={classes.sitedetailsHide}>
                        <ul className={classes.sitedetailsUl}>
                            <li className={classes.sitedetailsList}>
                                <Box className={classes.sitedetailsHeading}>Flipkart: The One-stop Shopping Destination</Box>
                                <Box className={classes.sitedetailsParagraph}>E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Flipkart houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories; from modern furniture like sofa sets, dining tables, and wardrobes to appliances that make your life easy like washing machines, TVs, ACs, mixer grinder juicers and other time-saving kitchen and small appliances; from home furnishings like cushion covers, mattresses and bedsheets to toys and musical instruments, we got them all covered. You name it, and you can stay assured about finding them all here. For those of you with erratic working hours, Flipkart is your best bet. Shop in your PJs, at night or in the wee hours of the morning. This e-commerce never shuts down. </Box>
                            </li>
                            <li className={classes.sitedetailsList}>
                                <Box className={classes.sitedetailsHeading}>Flipkart Plus</Box>
                                <Box className={classes.sitedetailsParagraph}>A world of limitless possibilities awaits you - Flipkart Plus was kickstarted as a loyalty reward programme for all its regular customers at zero subscription fee. All you need is 500 supercoins to be a part of this service. For every 100 rupees spent on Flipkart order, Plus members earns 4 supercoins & non-plus members earn 2 supercoins. Free delivery, early access during sales and shopping festivals, exchange offers and priority customer service are the top benefits to a Flipkart Plus member. In short, earn more when you shop more! </Box>
                            </li>
                            <li className={classes.sitedetailsList}>
                                <Box className={classes.sitedetailsHeading}>No Cost EMI</Box>
                                <Box className={classes.sitedetailsParagraph}>In an attempt to make high-end products accessible to all, our No Cost EMI plan enables you to shop with us under EMI, without shelling out any processing fee. Applicable on select mobiles, laptops, large and small appliances, furniture, electronics and watches, you can now shop without burning a hole in your pocket. If you've been eyeing a product for a long time, chances are it may be up for a no cost EMI. Take a look ASAP! Terms and conditions apply.</Box>
                            </li>
                            <li className={classes.sitedetailsList}>
                                <Box className={classes.sitedetailsHeading}>EMI on Debit Cards</Box>
                                <Box className={classes.sitedetailsParagraph}>Did you know debit card holders account for 79.38 crore in the country, while there are only 3.14 crore credit card holders? After enabling EMI on Credit Cards, in another attempt to make online shopping accessible to everyone, Flipkart introduces EMI on Debit Cards, empowering you to shop confidently with us without having to worry about pauses in monthly cash flow. At present, we have partnered with Axis Bank, HDFC Bank, State Bank of India and ICICI Bank for this facility. More power to all our shoppers! Terms and conditions apply. </Box>
                            </li>
                            <li className={classes.sitedetailsList}>
                                <Box className={classes.sitedetailsHeading}>Mobile Exchange Offers</Box>
                                <Box className={classes.sitedetailsParagraph}>Get an instant discount on the phone that you have been eyeing on. Exchange your old mobile for a new one after the Flipkart experts calculate the value of your old phone, provided it is in a working condition without damage to the screen. If a phone is applicable for an exchange offer, you will see the 'Buy with Exchange' option on the product description of the phone. So, be smart, always opt for an exchange wherever possible. Terms and conditions apply. </Box>
                            </li>
                            <li className={classes.sitedetailsList}>
                                <Box className={classes.sitedetailsHeading}>Mobile Phones</Box>
                                <Box className={classes.sitedetailsParagraph}>From budget phones to state-of-the-art smartphones, we have a mobile for everybody out there. Whether you're looking for larger, fuller screens, power-packed batteries, blazing-fast processors, beautification apps, high-tech selfie cameras or just large internal space, we take care of all the essentials. Shop from top brands in the country like Samsung, Apple, Oppo, Xiaomi, Realme, Vivo, and Honor to name a few. Rest assured, you're buying from only the most reliable names in the market. What's more, with Flipkart's Complete Mobile Protection Plan, you will never again find the need to run around service centres. This plan entails you to a number of post-purchase solutions, starting at as low as Rupees 99 only! Broken screens, liquid damage to phone, hardware and software glitches, and replacements - </Box>
                            </li>
                            <li className={classes.sitedetailsList}>
                                <Box className={classes.sitedetailsHeading}>Electronic Devices and Accessories</Box>
                                <Box className={classes.sitedetailsParagraph}>When it comes to laptops, we are not far behind. Filter among dozens of super-fast operating systems, hard disk capacity, RAM, lifestyle, screen size and many other criterias for personalized results in a flash. All you students out there, confused about what laptop to get? Our Back To College Store  segregates laptops purpose wise (gaming, browsing and research, project work, entertainment, design, multitasking) with recommendations from top brands and industry experts, facilitating a shopping experience that is quicker and simpler.</Box>
                            </li>
                            <li className={classes.sitedetailsList}>
                                <Box className={classes.sitedetailsHeading}>Large Appliances</Box>
                                <Box className={classes.sitedetailsParagraph}>Sleek TVs, power-saving refrigerators, rapid-cooling ACs, resourceful washing machines - discover everything you need to run a house under one roof. Our Dependable TV and Appliance Store, please reach out to <span style={{ color: '#3750d9' }}>Purchases.oni@flipkart.com</span></Box>
                            </li>
                            <li className={classes.sitedetailsList}>
                                <Box className={classes.sitedetailsHeading}>Lifestyle</Box>
                                <Box className={classes.sitedetailsParagraph}>'India ka Fashion Capital', is your one-stop fashion destination for anything and everything you need to look good. Our exhaustive range of Western and Indian wear, summer and winter clothing, formal and casual footwear, bridal and artificial jewellery, long-lasting make-up, grooming tools and accessories are sure to sweep you off your feet. Shop from crowd favourites like Vero Moda, Forever 21, Only, Arrow, Woodland, Nike, Puma, Revlon, Mac, and Sephora among dozens of other top-of-the-ladder names. From summer staple maxi dresses, no-nonsense cigarette pants, traditional Bandhani kurtis to street-smart biker jackets, you can rely on us for a wardrobe that is up to date. Explore our in-house brands like Metronaut, Anmi, and Denizen, to name a few, for carefully curated designs that are the talk of the town. Get ready to be spoiled for choice.Festivals, office get-togethers, weddings, brunches, or nightwear - Flipkart will have your back each time.</Box>
                            </li>
                            <li className={classes.sitedetailsList}>
                                <Box className={classes.sitedetailsHeading}>Books, Sports and Games</Box>
                                <Box className={classes.sitedetailsParagraph}>Work hard and no play? We don't believe in that. Get access to best-selling fiction and non-fiction books by your favourite authors, thrilling English and Indian blockbusters, most-wanted gaming consoles, and a tempting range of fitness and sports gadgets and equipment bound to inspire you to get moving. </Box>
                            </li>
                        </ul>
                    </Box>
                    <Box className={classes.sitedetailsList}>
                        <Box className={classes.sitedetailsHeading}>Information</Box>
                        <Box className={classes.sitedetailsParagraph}>This is just a Demo Website (Flipkart App Clone) by JaiPrakash Nagar.</Box>
                    </Box>
                </Box>
            </Box>
        )
    }
}

export default withStyles(style)(SiteDetails)