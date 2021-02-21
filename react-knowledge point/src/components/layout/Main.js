import React from 'react'

import routes from '@/views'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

class Main extends React.Component {

  createRoutes() {
    let arr = []
    routes.map(ele=>{
      arr.push(<Route
        key={ele.id}
        path={ele.path}
        component={ele.component}
        exact
      />)
      if(ele.children) {
        ele.children.map(ele=>{
          arr.push(
            <Route
              key={ele.id}
              path={ele.path}
              component={ele.component}
              exact
            />
          )
        })
      }
    })
    return arr
  }
  render() {
    // console.log('main props', this.props)
    return (
      <div className='lo-main'>
        {/*Switch必须是Route直接父组件，中间不能任何其它组件间隔*/}
        <Switch>
          {this.createRoutes()}
          {/*重定向*/}
          <Redirect from='/*' to='/jsx' />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Main)
