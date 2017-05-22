import React, { Component } from 'react';

export default class extends Component {
    shouldComponentUpdate() {
        return false; //never want the thing to rerender intself
    }
    
    // componentDidMount() {
    //     this.map = new google.maps.Map( this.refs.map, {
    //         center: { lat: 38.0293059, lng: 78.4766781 }, 
    //         zoom: 8
    //     });
    // }
    
    render() {
        return (
            <div id="map" ref="map" />
        )
    }
}