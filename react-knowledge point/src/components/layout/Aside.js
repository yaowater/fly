import React from 'react'


import routes from '@/views'
import { NavLink } from 'react-router-dom'

export default class Aside extends React.Component {
  createNavLinks() {
    return routes.map(ele=>(
      <div  className='lo-link-row' key={ele.id}>
        <NavLink
          to={ele.path}
          activeClassName='on'
        >
          {ele.text}
        </NavLink>
      </div>
    ))
  }
  render() {
    return (
      <div className='lo-aside'>
        {this.createNavLinks()}
      </div>
    )
  }
}
