import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LocalResults from '../localResults.jsx'

configure({ adapter: new Adapter() })

it(`renders component without crashing`, () => {
  shallow(<LocalResults />)
})

