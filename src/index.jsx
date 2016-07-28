import React from 'react'
import ReactDOM from 'react-dom'
import { List, Map } from 'immutable'
import {compose, createStore} from  'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'

import {TodoAppContainer} from './components/TodoApp'


const createStoreDevTools = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)
// Create a new Redux Store
const store = createStoreDevTools(reducer)
// Add desired state using dispatch with an action of SET_STATE
store.dispatch({
  type: 'SET_STATE',
  state: {
    todos: [
      {
        id:      1,
        text:    'React',
        status:  'active',
        editing: false
      },
      {
        id:      2,
        text:    'Redux',
        status:  'active',
        editing: false
      },
      {
        id:      3,
        text:    'Immutable',
        status:  'active',
        editing: false
      }
    ],
    filter: 'all'
  }
})

require ('../node_modules/todomvc-app-css/index.css')

ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById('app')
)