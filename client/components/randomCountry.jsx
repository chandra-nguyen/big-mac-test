import React from 'react'
import axios from 'axios'

class RandomCountry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      country: []
    }
  }

  componentDidMount() {
    this.getRandomCountry()
  }

  getRandomCountry() {
    axios.get(`/api/randomCountry`, {
      params: {
        localCountry: this.props.localCountry
      }
    })
    .then(results => {
      let countryInfo = results.data.split(',')
      this.setState({
        country: countryInfo
      })
    })
    .catch(err => console.log(err))
  }

  render(){
    return(
  <div className="block" id="randoResults">
    <h4>Random Results</h4>
    <div className="line">
      You could buy <div className="field" id="numberOfLocalMacs">{ Math.floor((this.props.amount / this.props.localCountry[2]) * (this.props.localCountry[4] / this.state.country[4]))}</div> big macs in <div className="field" >{this.state.country[0]}</div>
    </div>
    <div className="line">
      Your <div className="field" >{this.props.amount}</div> is worth about <div className="field" >{ Math.floor(this.props.amount * (this.props.localCountry[4] / this.state.country[4]))}</div> in <div className="field" >{this.state.country[0]}</div>
    </div>
  </div>
)}}

export default RandomCountry