import React from 'react';

const RandomCountry = (props) => (
  <div class="block" id="randoResults">
    <h4>Random Results</h4>
<div class="line"> You could buy <div class="field" id="numberOfLocalMacs">{props.numberOfBM}</div> big macs in {props.country} </div>
    <div class="line"> Your Dollar Purchasing Parity (PPP) is <div class="field" >{props.ppp}</div></div>
</div>
)

export default RandomCountry