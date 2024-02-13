import React, { Component } from 'react'

export default class NavbarController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorElFashion: null,
            anchorElElectronics: null,
            anchorElHome: null,
            anchorElBeauty: null,
            anchorElTwoWheelers: null,
        }
    }

    handleFashionHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElFashion: event.currentTarget })
    };

    handleFashionClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElFashion: null })
    }

    handleElectronicsHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElElectronics: event.currentTarget })
    };

    handleElectronicsClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElElectronics: null })
    }

    handleHomeHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElHome: event.currentTarget })
    };

    handleHomeClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElHome: null })
    }

    handleBeautyHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElBeauty: event.currentTarget })
    };

    handleBeautyClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElBeauty: null })
    }

    handleTwoWheelersHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElTwoWheelers: event.currentTarget })
    };

    handleTwoWheelersClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElTwoWheelers: null })
    }

    render() {
        return (
            <div>NavbarController</div>
        )
    }
}
