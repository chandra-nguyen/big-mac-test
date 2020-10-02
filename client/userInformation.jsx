import React from 'react';

const UserInfo = (props) => (
  <div class="block" id="userInfo">
    <div class="line">You are in <div class="field">{props.country}</div> </div>
    <div id="input" class="line">
      <form onSubmit={(e) => {
        props.onInput(e.target.value)
        e.preventDefault()
        }}><label>Please enter an amount of money in your local currency <input type="text" value={props.amount} onChange={(e) => props.onInput(e.target.value)}/></label></form>
    </div>
  </div>
)

export default UserInfo