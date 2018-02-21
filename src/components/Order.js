import React, { Component } from 'react';
import '../css/App.css';

class Order extends Component {

    render() {
        const items = this.props.items;

        const finishedItems = Object.keys(items).map((input) => {
            const isFinished = items[input].qtty < items[input].maintain ? true : false;
            console.log(`${input} is finished::${isFinished}`);
            return (isFinished ? <li>{items[input].name} :::: {items[input].maintain - items[input].qtty} kgs</li> : null);
        });

        return (
            <div>
                <p>Order</p>
                <ul>
                    {finishedItems}
                </ul>
            </div>
        );
    }
}

export default Order;