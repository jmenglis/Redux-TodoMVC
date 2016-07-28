import {Map} from 'immutable'

var setState = (state, newState) => {
  return state.merge(newState)
}

var toggleComplete = (state, itemId) => {
  const itemIndex = state.get('todos').findIndex(
    (item) => item.get('id') === itemId
  )

  const updatedItem = state.get('todos')
    .get(itemIndex)
    .update('status', status => status === 'active' ? 'completed' : 'active')

  return state.update('todos', todos => todos.set(itemIndex, updatedItem))
}

export default (state = Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'TOGGLE_COMPLETE':
      return toggleComplete(state, action.itemId)
  }
  return state
}