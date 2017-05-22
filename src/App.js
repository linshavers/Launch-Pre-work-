import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import GoogleMap from './components/google_map';

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

// axios end


class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (

      <div className="App">
       
        {/*creating header w/ logo */}
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h2><large>Foodie Finder!</large><small> By LS</small></h2>*/}
            <div class="jumbotron">
              <h1> Foodie Finder App! <small> By LS </small></h1>
              <h4>This app will display all of the open restaurants and bars in Charlottesville.</h4>
            </div>
        </div>



        {/*//creating list of restaurants and bars - retrieving data */}
        <div className="List">
          <div className="List-header">List of Restaurants/Bars</div>
          <div className="List-body">
            <button className="List-btn-primary" onClick="performGetRequest1()">Get Restaurants</button> 
            <div className="List-body" id="getResult1"></div>
          </div>

        </div>


        {/*//creating map */}
        <div className="App-map">
          <h3> Map </h3>
          <GoogleMap/>
        </div>
        


      </div>
    );
  }
}

export default App;



/*import React from 'react'
import ReactDOM from 'react-dom'

import './App.css';

import React, {PropTYpes} from 'react';
import { Router } from 'react-router';


class App extends React.Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  // class getter
  get content() {
    return (<Router
        routes={this.props.routes}
        history={this.props.history} />)
  }

  render() {
    return (
      <div style={ { height: '100%' } }>
        {this.content}
      </div>
    )
  }
}

const App = React.createClass({
  render: function() {
    return (
      <div className= 'container'> 
      Text Text Text 
      </div>
    );
  }
});

const mountNode = document.querySelector('#root');
ReactDOM.render(<App/>, mountNode);*/

