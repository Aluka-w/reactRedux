import React, { Component } from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'
import CounterFather from './component/CounterFather'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <CounterFather />
      </Provider>
    )
  }
}

export default App;
