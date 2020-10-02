import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import UserInfo from '../userInformation.jsx'
import axios from 'axios'

configure({ adapter: new Adapter() })

it(`renders component without crashing`, () => {
  shallow(<UserInfo />)
})





