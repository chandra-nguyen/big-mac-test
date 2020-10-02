import React from 'react';

const LocalResults = (props) => (
  <div class="block" id="localResults">
    <h4>Local Results</h4>
    <div class="line"> You could buy <div class="field" id="numberOfLocalMacs">{props.numberOfBM}</div> big macs in your country </div>
    <div class="line"> Your Dollar Purchasing Parity (PPP) is <div class="field" >{props.ppp}</div></div>
</div>
)

export default LocalResults