git import React, { Component } from 'react'

export default class FashionNavController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorElMenTopWear: null,
            anchorElMenBottomWear: null,
            anchorElWomenEthnic: null,
            anchorElWomenWestern: null,
            anchorElMenFootwear: null,
            anchorElWomenFootwear: null,
            anchorElWatches: null,
            anchorElBags: null,
            anchorElKids: null,
            anchorElEssentials: null,
            anchorElWinter: null,
        }
    }

    handleMenTopWearHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElMenTopWear: event.currentTarget })
    };

    handleMenTopWearClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElMenTopWear: null })
    }

    handleMenBottomWearHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElMenBottomWear: event.currentTarget })
    };

    handleMenBottomWearClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElMenBottomWear: null })
    }

    handleWomenEthnicHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElWomenEthnic: event.currentTarget })
    };

    handleWomenEthnicClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElWomenEthnic: null })
    }

    handleWomenWesternHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElWomenWestern: event.currentTarget })
    };

    handleWomenWesternClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElWomenWestern: null })
    }

    handleMenFootwearHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElMenFootwear: event.currentTarget })
    };

    handleMenFootwearClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElMenFootwear : null })
    }

    handleWomenFootwearHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElWomenFootwear: event.currentTarget })
    };

    handleWomenFootwearClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElWomenFootwear : null })
    }

    handleWatchesHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElWatches: event.currentTarget })
    };

    handleWatchesClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElWatches : null })
    }

    handleBagsHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElBags: event.currentTarget })
    };

    handleBagsClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElBags : null })
    }

    handleKidsHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElKids: event.currentTarget })
    };

    handleKidsClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElKids : null })
    }

    handleEssentialsHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElEssentials : event.currentTarget })
    };

    handleEssentialsClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElEssentials : null })
    }

    handleWinterHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorElWinter: event.currentTarget })
    };

    handleWinterClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorElWinter : null })
    }

    render() {
        return (
            <div>FashionNavController</div>
        )
    }
}
