import React, { Component } from 'react';
import './App.css';

// Tabletop
import Tabletop from 'tabletop';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1mQWX4cTCKO705NxADRu1Zz2sBABO0f7O52KXWQPTFFA',
      // callback for when the data has been successfully pulled.
      callback: googleData => { // googleData gets called with the data
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true // simpleSheet assumes you have one table and you don't care what it's called
    })                 //so it sends the callback an array of rows instead of a list of modals.
  }
  
  render() {
    const { data } = this.state
    return (
      <div className="App">
        <h1 className="App-title">Using Google Spreadsheets as CMS in a react Project </h1>
        <div className="employee-details">
          {
            data.map(obj => {
              return (
                <div>
                  <div key={obj.employ_id} className="details">
                    <p>{obj.name}</p>
                    <p>{obj.title}</p>
                    <a href="https://github.com/Namwanza/"><img alt={obj.titile} src={obj.img}/></a>
                  </div>
                </div>
              )
            })
          }
        </div>
        <footer>
          &#9400;2019: follow me on my github: <a href="https://github.com/Namwanza/">Ronald Namwanza</a>
        </footer>
      </div>
    );
  }
}

export default App;
