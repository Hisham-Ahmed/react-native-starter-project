import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { Actions, Router, Scene } from 'react-native-router-flux'
import { Provider, connect } from 'react-redux'
import configureStore from './src/store/configureStore'
import Home from './src/screens/Home'
import Card from './src/components/Card'

const ConnectedRouter = connect()(Router)
const store = configureStore()

const Scenes = Actions.create(
  <Scene key='root'>
    <Scene key='home' component={Home} title='Home Title' />
    <Scene key='card' component={Card} />
  </Scene>
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes}/>
      </Provider>
    )
  }
}
