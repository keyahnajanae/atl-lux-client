import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import PropertiesList from '../pages/PropertiesList'
import PropertyShow from '../pages/PropertyShow'
import NewProperty from '../pages/NewProperty'
import EditProperty from '../pages/EditProperty'
import RentalList from '../pages/RentalList'
import SaleList from '../pages/SaleList'
import AgentShow from '../pages/AgentShow'
import AgentList from '../pages/AgentList'
import createAgent from '../pages/createAgent'
import About from '../pages/About'
import DeleteProperty from '../pages/DeleteProperty'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import EditAgent from '../pages/EditAgent'
import DeleteAgent from '../pages/DeleteAgent'
import UserProfile from '../pages/UserProfile'
import UserEdit from '../pages/UserEdit'





const Routes = (props) => {
  return (
    <Switch>
      
      <Route exact path='/atl-lux' component={ Home } />
      <Route exact path='/atl-lux/contact' component={ Contact} />
      <Route exact path='/atl-lux/properties/new' component={ NewProperty } />
      <Route exact path='/atl-lux/properties/:id/delete' component={ DeleteProperty } />
      <Route exact path='/atl-lux/properties/:id/edit' component={ EditProperty } />
      <Route exact path='/atl-lux/properties/:id' component={ PropertyShow } />
      <Route exact path='/atl-lux/for-sale' component={ SaleList } />
      <Route exact path='/atl-lux/for-rent' component={ RentalList } />
      <Route exact path='/atl-lux/agents/' component={ AgentList} />
      <Route exact path='/atl-lux/agents/:id/edit' component={ EditAgent} />
      <Route exact path='/atl-lux/agents/:id/delete' component={ DeleteAgent} />
      <Route exact path='/atl-lux/agents/new' component={ createAgent } />
      <Route exact path='/atl-lux/agents/:id' component={ AgentShow} />
      <Route exact path='/atl-lux/about' component={ About } />
      <Route exact path='/atl-lux/login' component={ Login } /> 
      <Route exact path='/atl-lux/register' component={ Register } />
      <Route exact path='/atl-lux/user/' component={ UserProfile } />
      <Route exact path='/atl-lux/user/edit' component={ UserEdit} />
      { <Route exact path='/atl-lux/properties' component={ PropertiesList } /> }
    </Switch>
  )
}

export default Routes;