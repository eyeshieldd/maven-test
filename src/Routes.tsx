import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import InquiriesPage from './containers/InquiriesPage'
import HomePage from './containers/HomePage'

const Routes: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/inquiris" exact component={InquiriesPage} />
      </Switch>
    </Router>
  )
}

export default Routes
