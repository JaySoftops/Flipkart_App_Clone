import React, { Component, createContext } from 'react'

const MyContext = createContext(null)

class Contexts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            getData: [],
            isLoading: true,
            FName: 'Jai',
            // Age: 24,
            // Id: 'S78',
            // Tech: 'React',
            singleProduct: null,
            Arr: [1, 2, 3, 4, 5]
        }
    }

    GetApi = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products', {
                // const response = await fetch('https://api.escuelajs.co/api/v1/products', {
                method: 'GET'
            })
            const result = await response.json()
            this.setState({ getData: result }, () => {
                console.log(this.state.getData, "@@@@@")
            })
            this.setState({ isLoading: false })
            // console.log(result)
        }
        catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.GetApi()
    }

    // componentDidUpdate() {
    //     this.GetApi()
    // }

    render() {
        // console.log(this.state.number)
        return (
            <>
                <MyContext.Provider value={this.state}>
                    {this.props.children}
                </MyContext.Provider>
            </>
        )
    }
}

export { Contexts, MyContext }