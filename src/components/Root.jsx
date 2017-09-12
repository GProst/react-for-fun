import React from 'react'
import {injectGlobal} from 'styled-components'
import {Route, Switch, Redirect} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import {Provider} from 'react-redux'

import '../font'

import {ThemeProvider} from '../theme'
import ErrorHandler from './services/ErrorHandler/index'

import store from '../redux/store'
import history from '../history'
import {Routes} from '../routes'

import Main from './pages/Main'
import Login from './pages/Login/index'
import Loader from './pages/Loader/index'
import PostList from './pages/PostList'
import NotSupported from './pages/NotSupported'

injectGlobal`
  html {
    font-size: 16px;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-width: 1280px;
  }

  html.wf-active {
    font-family: "Roboto", sans-serif;
  }

  html {
    height: 100vh;
  }

  body {
    height: 100%;
  }

  #root {
    height: 100%;
  }
  
  * {
    margin: 0;
    padding: 0;
  }
`

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <ErrorHandler>
            <ConnectedRouter history={history} store={store}>
              <Switch>
                <Route exact path={Routes.main} component={Main} />
                <Route exact path={Routes.login} component={Login} />
                <Route exact path={Routes.fetchingProfileData} component={Loader} />
                <Route exact path={Routes.postList} component={PostList} />
                <Route exact path={Routes.notSupported} component={NotSupported} />
                <Redirect to={Routes.main} />
              </Switch>
            </ConnectedRouter>
          </ErrorHandler>
        </ThemeProvider>
      </Provider>
    )
  }
}

export default Root