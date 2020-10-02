import React from 'react'
import axios from 'axios'

import UserInfo from './userInformation.jsx'
import LocalResults from './localResults.jsx'
import RandomCountry from './randomCountry.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      country: '',
      bmIndex: [],
      amount: 0,
      localCurrency: '',
      numberOfBM: 0
    }
    this.onInput = this.onInput.bind(this)
  }

  componentDidMount() {
    this.getLocalCountry()
  }

  getLocalCountry() {
    axios.get(`/api/localCountry`)
    .then(results => {
      let countryName = results.data
      this.setState({country: countryName })
      return countryName
    })
    .catch(err => console.log(err))
    .then(country => {
      this.lookUpBigMacTest(country)
    })
  }

  lookUpBigMacTest(country) {
    axios.get(`/api/bigmacs/${country}`)
    .then(results => {
      let info = results.data.split(',')
      this.setState({
        bmIndex: info
      })
    })
    .catch(err => console.log(err))
  }

  onInput(num, callback) {
    this.setState({
      amount: num,
      numberOfBM: Math.floor(num/this.state.bmIndex[2])
    })
  }

  render() {
    return (
      <div id="container">
        <UserInfo country={this.state.country} amount={this.state.amount} onInput={this.onInput} handleSubmit={this.handleSubmit}/>
        <LocalResults numberOfBM={this.state.numberOfBM} ppp={this.state.bmIndex[5]}/>
        <RandomCountry localCountry={this.state.bmIndex} amount={this.state.amount}/>
      </div>
    )
  }
}
export default App;

