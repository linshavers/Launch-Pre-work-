import React, { Component } from 'react';
import axios from 'axios';

// axios start
export function performGetRequest1(){
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';

    axios.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyBn0e0QMAkZTAhksJ6FUR8mgoJNXh_Zf0I&libraries=places&callback=initMap')
        .then(function (response) {
            resultElement.innerHTML = generateSuccessHTMLOutput(response) //this is a new function
        })
        .catch(function(error){
            resultElement.innerHTML = generateErrorHTMLOutput(error) //this is a new function 
        });
}

export function generateSuccessHTMLOutput(response){
    return  '<h4>Result:</h4>' +
            '<h5>Status:</h5>' +
            '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
            '<h5>Data:</h5>' +
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
}

export function generateErrorHTMLOutput(error){
    return  '<h4>Result:</h4>' +
            '<h5>Message:</h5>' +
            '<pre>' + error.message + '</pre>' +
            '<h5>Status:</h5>' +
            '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
            '<h5>Data:</h5>' +
            '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
}

export default class extends Component {
    
    render() {
        return (
            <div className="List">
                <div className="List-header">List of Restaurants/Bars</div>
                    <div className="List-body">
                        <button className="List-btn-primary" onClick="performGetRequest1()">Get Restaurants</button> 
                    </div>
                <div className="List-body" id="getResult1"></div>

            </div>
        )
    }
}