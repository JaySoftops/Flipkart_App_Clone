import { withStyles } from '@material-ui/core'
import { Avatar } from 'antd'
import React, { Component } from 'react'
import Profile from '../Savyyr/profile.svg'
import Gift from '../Savyyr/Gift.svg'
import Payroll from '../Savyyr/Payroll.svg'
import HR from '../Savyyr/HR.svg'
import { Gif } from '@material-ui/icons'

const style = ({
    serviceBody: {
        // width: '70%',
        padding: '50px 20px',
        margin: 'auto',
    },
    Top: {
        width: '50%',
    },
    TopSide: {
        width: '600px',
        fontFamily: 'Lato',
        marginLeft: 'auto',
    },
    serviceLogo: {
        // padding: '10px',
        // '& .ant-avatar': {
        //     padding: '10px',
        // },
    },
    serviceHeading: {
        fontSize: '2.7rem',
        fontWeight: '600',
    },
    serviceSecondHeading: {
        fontSize: '2.7rem',
        fontWeight: '600',
        margin: 'auto',
    },
    serviceSpanHeading: {
        fontSize: '2.7rem',
        color: 'red',
        paddingLeft: '5px',
    },
    MainUl: {
        width: '70%',
        margin: 'auto',
    },
    serviceUl: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    serviceList: {
        flex: '1',
        width: '290px',
        // height: '350px',
        border: '1px solid grey',
        borderRadius: '5px',
        // margin: '55px 40px',
        margin: '55px 15px',
        padding: '20px 20px',
        '& .ant-avatar': {
            padding: '12px',
        },
    },
    serviceLogo: {
        width: '80px',
        height: '80px',
        border: '2px solid #a89393',
        backgroundColor: 'white',
        textAlign: 'center',
        margin: 'auto',
    },
    serviceNumberHeading: {
        marginTop: '50px',
        marginLeft: '30px',
        marginRight: '30px',
        padding: '10px 0px',
        display: 'flex',
        borderBottom: '3px solid #dc2a2a'
    },
    serviceListNumber: {
        color: 'pink',
        fontSize: '2.7rem',
        fontWeight: '600',
    },
    serviceListTitle: {
        fontWeight: '600',
        padding: '8px 8px',
        paddingRight: '70px',
    },
    serviceListHRTitle: {
        fontWeight: '600',
        padding: '8px 8px',
        paddingRight: '35px',
    },
    serviceListParagraph: {
        fontFamily: 'Fira Sans',
        color: 'grey',
        marginTop: '20px',
        fontWeight: '500',
        lineHeight: '1.5rem',
    },
    '@media screen and (min-width:1024px) and (max-width:1440px)': {
        serviceBody: {
            // width: '100%',
        },
       
        MainUl: {
            width: '100%',
        },
        serviceList: {
            // flex: '1',
            width: '200px',
        },
        serviceHeading: {
            padding: '0px 20px',
        },
        serviceSecondHeading: {
            padding: '0px 20px',
        },
        serviceNumberHeading: {
            marginLeft: '10px',
            marginRight: '10px',
        },
        serviceListNumber: {
            fontSize: '2.4rem',
        },

        serviceListTitle: {
            fontSize: '.95rem',
            paddingBottom: '25px',
        },
        serviceListHRTitle: {
            fontSize: '.95rem',
        },
        serviceListParagraph: {
            fontSize: '.95rem',
            lineHeight: '1.4rem',
        },
    },
    '@media screen and (min-width:768px) and (max-width:1023px)': {
        serviceHeading: {
            paddingLeft: '40px'
        },
        serviceSecondHeading: {
            paddingLeft: '40px'
        },
        Top: {
            marginBottom: '20px',
        },
        MainUl: {
            width: '90%',
            margin: 'auto',
        },
        serviceUl: {
            flexDirection: 'column',
        },
        serviceList: {
            width: '100%',
            margin: '40px auto',
        },
        serviceNumberHeading: {
            marginLeft: '240px',
            marginRight: '240px',
            padding: '10px 0px',
            // lineHeight: '1rem'
        },
    },
    '@media screen and (min-width:300px) and (max-width:767px)': {
        serviceBody: {
            width: '100%',
            padding: '5px 10px',
            margin: '20px auto'
        },
        Top: {
            width: '100%',
            textAlign: 'center',
            marginBottom: '10px',
        },
        TopSide: {
            width: '100%',
            // width: '270px',
            textAlign: 'center',
            lineHeight: '1.5rem',
        },
        serviceSpanHeading: {
            fontSize: '1.1rem',
        },
        serviceHeading: {
            fontSize: '1.1rem',
            paddingLeft: '0px'
        },
        serviceSecondHeading: {
            fontSize: '1.1rem',
            paddingLeft: '00px'
        },
        MainUl: {
            width: '90%',
            margin: 'auto',
        },
        serviceUl: {
            flexDirection: 'column',
        },
        serviceList: {
            width: '100%',
            margin: '40px auto',
            // padding: '10px',
        },
        serviceNumberHeading: {
            // marginLeft: '200px',
            // marginRight: '200px',
            padding: '10px 0px',
            // lineHeight: '1rem'
        },
        serviceListParagraph: {
            fontSize: '.85rem',
            lineHeight: '1.2rem',
        },
    },
})

class ServiceSavyyr extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.serviceBody}>
                <div className={classes.Top}>
                    <div className={classes.TopSide}>
                        <div className={classes.serviceHeading}>We Run All Kinds of Services</div>
                        <div className={classes.serviceSecondHeading}>From<span className={classes.serviceSpanHeading}>Technologies</span></div>
                    </div>
                </div>

                <div className={classes.MainUl}>
                    <ul className={classes.serviceUl}>
                        <li className={classes.serviceList}>
                            <div style={{ width: '100%', display: 'flex', margin: '-55px auto',}}>
                                <Avatar size='large' src={Profile} alt='profile' className={classes.serviceLogo} />
                            </div>
                            <div className={classes.serviceNumberHeading}>
                                <div className={classes.serviceListNumber}>01</div>
                                <div className={classes.serviceListTitle}>IT Consultation</div>
                            </div>
                            <div className={classes.serviceListParagraph}>
                                IT Consulting services are advisory services that help clients assess different
                                technologies strategies and, in doing so, align their technology strategies with their
                                business or process strategies.
                            </div>
                        </li>
                        <li className={classes.serviceList}>
                            <div style={{ width: '100%', display: 'flex', margin: '-55px auto', }}>
                                <Avatar size='large' src={Gift} alt='profile' className={classes.serviceLogo} />
                            </div>
                            <div className={classes.serviceNumberHeading}>
                                <div className={classes.serviceListNumber}>02</div>
                                <div className={classes.serviceListTitle}>Corporate Gifting</div>
                            </div>
                            <div className={classes.serviceListParagraph}>
                                Corporate gifting is defined as the act of giving gifts to colleague, employees,
                                clients, and potential customers as a way to build connections and relationships.
                            </div>
                        </li>
                        <li className={classes.serviceList}>
                            <div style={{ width: '100%', display: 'flex', margin: '-55px auto', }}>
                                <Avatar size='large' src={Payroll} alt='profile' className={classes.serviceLogo} />
                            </div>
                            <div className={classes.serviceNumberHeading}>
                                <div className={classes.serviceListNumber}>03</div>
                                <div className={classes.serviceListTitle}>Payroll Management</div>
                            </div>
                            <div className={classes.serviceListParagraph}>
                                Payroll Administration Produce paychecks, handle nationwide taxes, and deal with sick time
                                and vacation time.
                            </div>
                        </li>
                        <li className={classes.serviceList}>
                            <div style={{ width: '100%', display: 'flex', margin: '-55px auto', }}>
                                <Avatar size='large' src={HR} alt='profile' className={classes.serviceLogo} />
                            </div>
                            <div className={classes.serviceNumberHeading}>
                                <div className={classes.serviceListNumber}>04</div>
                                <div className={classes.serviceListHRTitle}>HR -Personality development</div>
                            </div>
                            <div className={classes.serviceListParagraph}>
                                Recruiting, hiring and firing. Also background interviews,
                                exit interviews, and wage reviews.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};

export default withStyles(style)(ServiceSavyyr)
