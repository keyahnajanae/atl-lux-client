import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import PropertiesList from '../pages/PropertiesList'
import PropertyShow from '../pages/PropertyShow'
import NewProperty from '../pages/NewProperty'
import EditProperty from '../pages/EditProperty'
import RentalList from '../pages/RentalList'
import SaleList from '../pages/SaleList'
import AgentList from '../pages/AgentList'
import userSavedListings from '../pages/UserSavedListings'
import About from '../pages/About'



const Routes = (props) => {
  return (
    <Switch>
      
      <Route exact path='/atl-lux' component={ Home } />
      <Route exact path='/atl-lux/properties/new' component={ NewProperty } />
      <Route exact path='/atl-lux/properties/:id/edit' component={ EditProperty } />
      <Route exact path='/atl-lux/properties/:id' component={ PropertyShow } />
      <Route exact path='/atl-lux/for-sale' component={ SaleList } />
      <Route exact path='/atl-lux/for-rent' component={ RentalList } />
      <Route exact path='/atl-lux/saved-listings' component={ userSavedListings } />
      <Route exact path='/atl-lux/agents/:id' component={ AgentList} />
      <Route exact path='/atl-lux/about' component={ About } />
      { <Route exact path='/atl-lux/properties' component={ PropertiesList } /> }
    </Switch>
  )
}

export default Routes;