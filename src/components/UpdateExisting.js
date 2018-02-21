import React, { Component } from 'react';
import '../css/App.css';

class UpdateExisting extends Component {

    addExistingItem(e) {
        e.preventDefault();
        console.log("Selected item::::");
        console.log(this.selectedItem.value);
        this.props.incrementExistingItem(this.selectedItem.value);
    }

    removeExistingItem(e) {
        e.preventDefault();
        console.log("Selected item::::");
        console.log(this.selectedItem.value);
        this.props.decrementExistingItem(this.selectedItem.value);
    }

    render() {
        const options = Object.keys(this.props.items)
            .map((key) => {
                return (
                    <option key={key} value={key}>{this.props.items[key].name}</option>
                );
            })
        return (
            <div>
                <p>Update existing inventory</p>
                <form>
                    <select ref={(input) => this.selectedItem = input}>
                        {options}
                    </select>
                    <button id="add" type="submit" onClick={(e) => this.addExistingItem(e)}>+</button>
                    <button id="remove" type="submit" onClick={(e) => this.removeExistingItem(e)}>-</button>
                </form>
            </div>
        );
    }
}

export default UpdateExisting;