import React, { Component } from 'react'

export default class HeaderController extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // MenuList: null,
            anchorEl: null,
            anchorEl2: null
        }
    }

    handleHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorEl: event.currentTarget })
    };

    handleClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorEl: null })
    }

    handleLoginHover = (event) => {
        event.preventDefault()
        console.log('open')
        this.setState({ anchorEl2: event.currentTarget })
    };

    handleLoginClose = (event) => {
        event.preventDefault()
        console.log('close')
        this.setState({ anchorEl2: null })
    }

    render() {
        return (
            // <Button
            //             style={{boxShadow: 'none', backgroundColor: '#e4feff',}}
            //             variant='contained'
            //             startIcon={<Search/>}
            //                 >Searchdsgafsgdfgdfhadthdfg
            //                 </Button>
            <div>HeaderController</div>
        )
    }
}
