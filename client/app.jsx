import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import UserInfo from './userInformation.jsx'
import LocalResults from './localResults.jsx'
import RandomCountry from './randomCountry.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      country: '',
      amount: 0,
      localPrice: 0,
      localCurrency: '',
      numberOfBM: 0,
      PPP: 0,
      randoCountry: '',
    }
    this.onInput = this.onInput.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/localCountry`)
    .then(results => {
      let countryName = results.data
      this.setState({ country: countryName })
      return countryName
    })
    .catch(err => console.log(err))
    .then(country => {
      axios.get(`/api/bigmacs/${country}`)
      .then(results => {
        let info = results.data.split(',')
        return info
      })
      .catch(err => console.log(err))
      .then(results => {
        this.setState({
          localPrice: results[2],
          numberOfBM: Math.floor((this.state.amount/results[2])),
          ppp: results[5]
        })
      })
    })

    this.getRandomCountry()
  }

  getRandomCountry() {
    axios.get(`/api/randomCountry`)
    .then(results => {
      this.setState({
        randoCountry: results.data.split(',')
      })
    })
    .catch(err => console.log(err))
  }

  onInput(num, callback) {
    this.setState({
      amount: num,
      numberOfBM: Math.floor(num/this.state.localPrice)
    })
  }

  render() {
    return (
      <div id="container">
        <UserInfo country={this.state.country} amount={this.state.amount} onInput={this.onInput} handleSubmit={this.handleSubmit}/>
        <LocalResults numberOfBM={this.state.numberOfBM} ppp={this.state.ppp}/>
        <RandomCountry country={this.state.randoCountry[0]} numberOfBM={Math.floor((this.state.amount/this.state.localPrice)*(this.state.localPrice/this.state.randoCountry[2]))} ppp={this.state.randoCountry[5]}/>
      </div>
    )
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById('app'))