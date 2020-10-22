import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {itemsInCartTest} from '../testData/itemsInCartTest'
import OrderCart from './OrderCart'




class OrderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inCart: [],
            preferences: {
                diningChoice: 'Pickup',
                pickUpTime: 'ASAP',
                subTotal: 0,
                orderSubmitted: false
            }
        }
    }
    componentDidMount() {
        this.setState({
            inCart: itemsInCartTest
        })
    }
    editInCart = (event, itemId, quantity = false, add = true) => {
        ///****dont let quantity go below zero
        if (quantity) {
            if (add) {
                const stateCopy = [...this.state.inCart]
                stateCopy[itemId].quantity = stateCopy[itemId].quantity + 1
                this.setState({ inCart: stateCopy })
            } else {
                const stateCopy = [...this.state.inCart]
                stateCopy[itemId].quantity = stateCopy[itemId].quantity - 1
                this.setState({ inCart: stateCopy })
            }
        } else {
            const stateCopy = [...this.state.inCart]
            stateCopy[itemId].specInstructions = event.target.value
            this.setState({ inCart: stateCopy })
        }
    }

    editPreferences = (val, preference) => {
        const copy = { ...this.state.preferences }
        copy[preference] = val
        this.setState({ preferences: copy })
    }
    submitOrder = () => {
        this.setState({
            preferences: {
                diningChoice: 'Pickup',
                pickUpTime: 'ASAP',
                subTotal: 0,
                orderSubmitted: true
            }
        })
        ///submit order to backend
    }



    render() {
        if (this.state.preferences.orderSubmitted) {
            alert(JSON.stringify(this.state.preferences) + JSON.stringify(this.state.inCart))
        }
        return (
            <div>
                Order Component!
                <div>
                    <Link to={'/home'}>Home</Link>
                    <OrderCart
                        preferences={this.state.preferences}
                        editPref={this.editPreferences}
                        inCart={this.state.inCart}
                        edit={this.editInCart}
                        submit={this.submitOrder}
                        style={{ marginTop: 80 }}
                    />
                </div>
            </div>
        )
    }
}
export default OrderComponent;