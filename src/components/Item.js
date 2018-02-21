import React, { Component } from 'react';
import '../css/App.css';

const Item = (props) => {
    return (
        <div >
            <li>{props.item.name} - {props.item.qtty}kg</li>
        </div>
    );
}


export default Item;