import React from 'react';
import './App.css'

class App extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {
    fetch(`https://spreadsheets.google.com/feeds/list/1mQWX4cTCKO705NxADRu1Zz2sBABO0f7O52KXWQPTFFA/od6/public/values?alt=json`)
      .then(res => res.json()) // get the result as JSON
      .then(items => this.setState({ items }))
  }

  render () {
    return (
      <div style={{textAlign: 'center'}}>
       { console.log(this.state.items && this.state.items.feed && this.state.items.feed.entry)}
        {
          this.state.items &&
            this.state.items.feed &&
            this.state.items.feed.entry
            ? this.state.items.feed.entry.map(
              item => 
              <ul key={item.id.$t} className="details">
                <div>{item.gsx$name.$t}</div>
                <div>{item.gsx$title.$t}</div>
                <img src={item.gsx$img.$t} alt=""/>
              </ul>
            )
            : <div>Loading...</div>
        }
      </div>
    )
  }
}

export default App;