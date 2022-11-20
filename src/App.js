import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'

import Login from './components/LoginForm'
import NotFound from './components/NotFound'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/login" component={Login} />
    <Route component={NotFound} />
  </Switch>
)

export default App
