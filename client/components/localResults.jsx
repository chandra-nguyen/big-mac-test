import React from 'react'

const LocalResults = (props) => (
  <div className="block" id="localResults">
    <h4>Local Results</h4>
    <div className="line"> You could buy <div className="field" id="numberOfLocalMacs">{props.numberOfBM}</div> big macs in your country </div>
    <div className="line"> Your Dollar Purchasing Parity (PPP) is <div className="field" >{props.ppp}</div></div>
  </div>
)

export default LocalResults