import React from 'react'

const UserInfo = (props) => (
  <div className="block" id="userInfo">
    <div className="line">
      You are in <div className="field" id="usersCountry">{props.country}</div>
    </div>
    <div id="input" className="line">
      <form onSubmit={(e) => {
        props.onInput(e.target.value)
      e.preventDefault()
      }}>
        <label>Please enter an amount of money in your local currency <input type="text" value={props.amount} onChange={(e) => props.onInput(e.target.value)}/></label>
      </form>
    </div>
  </div>
)

export default UserInfo