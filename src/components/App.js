import React, { Component } from 'react';
import Item from './Item';
import AddToInventory from './AddToInventory';
import UpdateExisting from './UpdateExisting';
import Order from './Order';
import existingInventory from '../existing-inventory';
import '../css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: existingInventory
    };
    this.addItemToInventory = this.addItemToInventory.bind(this);
    this.incrementExistingItem = this.incrementExistingItem.bind(this);
    this.decrementExistingItem = this.decrementExistingItem.bind(this);
  }

  addItemToInventory(item) {
    const items = { ...this.state.items };
    items[`item-${Date.now()}`] = item;
    this.setState({ items });
    console.log("In addItemToInventory");
  }

  incrementExistingItem(itemKey) {
    const items = { ...this.state.items };
    items[itemKey].qtty = items[itemKey].qtty + 1;
    this.setState({ items });
  }

  decrementExistingItem(itemKey) {
    const items = { ...this.state.items };
    items[itemKey].qtty = items[itemKey].qtty - 1;
    this.setState({ items });
  }

  render() {
    return (
      <div className="kitchen-inventory">
        <ul>
          {
            Object.keys(this.state.items)
              .map((key) => <Item key={key} item={this.state.items[key]} />)
          }
        </ul>
        <div>
          <p>Update Inventory Form</p>
          <UpdateExisting items={this.state.items} incrementExistingItem={this.incrementExistingItem} decrementExistingItem={this.decrementExistingItem} />
          <AddToInventory addItemToInventory={this.addItemToInventory} />
        </div>
        <Order items={this.state.items} />
      </div>
    );
  }
}

export default App;
