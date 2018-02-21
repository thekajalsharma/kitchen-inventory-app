import React, { Component } from 'react';
import '../css/App.css';

class AddToInventory extends Component {

    addItem(e) {
        e.preventDefault();
        const item = {
            name: this.itemName.value,
            qtty: this.itemCurrentQtty.value,
            maintain: this.itemMaintainQtty.value
        };
        this.props.addItemToInventory(item);
    }

    render() {
        const existingItems = this.props.items;
        return (
            <div className="AddToInventory">

                <p>Add new items in Inventory</p>
                <div>
                    <form ref={(input) => this.form = input} onSubmit={(e) => this.addItem(e)}>
                        <input ref={(input) => this.itemName = input} type="text" placeholder='Item Name' />
                        <input ref={(input) => this.itemCurrentQtty = input} type="text" placeholder='Current Quantity' />
                        <input ref={(input) => this.itemMaintainQtty = input} type="text" placeholder='Maintain Quantity' />
                        <button type="submit">Add Item</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddToInventory;