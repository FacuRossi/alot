import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import {Divider} from 'semantic-ui-react'

import './styles.css'

// components for testing, remove later
import Nav from '../Nav'
import WelcomeContainer from '../WelcomeContainer'
import ToolsContainer from '../ToolsContainer'
import ToolDetailContainer from '../ToolDetailContainer'
import WorkshopsContainer from '../WorkshopsContainer'
import WorkshopDetailContainer from '../WorkshopDetailContainer'
import Auth from '../Auth'
import ConfirmationContainer from '../ConfirmationContainer'
import Footer from '../Footer'
import AdminTest from '../Admin/AdminTest'
import EditTool from '../EditTool'
// Admin route imports
import Admin from '../Admin'

export default class App extends Component {
  render () {
    return (
      <div>
        <Nav />
        <Route exact path='/' component={WelcomeContainer}/>
        <Route path='/login' component={Auth}/>
        <Route path='/admin' component={Admin}/>
        <Route exact path='/tools/:category?' component={ToolsContainer}/>
        <Route exact path='/tools/:category/:id' component={ToolDetailContainer}/>
        <Route exact path='/edit/tools/:id' component={EditTool}/>
        <Route path='/workshops/:category?' component={WorkshopsContainer} />
        {/* <Route path='/workshops/:category/:id' component={WorkshopDetailContainer} /> */}
        <Route exact path='/admin' component={Admin}/>
        <Route exact path='/workshops/:category?' component={WorkshopsContainer} />
        <Route exact path='/workshops/:category/:id' component={WorkshopDetailContainer} />
        <Route exact path='/confirm/:type/:id' component={ConfirmationContainer}/>
        {/* For testing non connected components */}
        <Route exact path='/protectedtest' component={AdminTest}/>
        {/* For testing non connected components */}
        {/* <Route exact path='/test' component={}/> */}
        <Divider />
        <Route path='/' component={Footer}/>
      </div>
    )
  }
}
