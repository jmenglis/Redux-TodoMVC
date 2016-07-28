import {Map} from 'immutable'

const setState = (state, newState) => {
  return state.merge(newState)
}

const findItemIndex = (state, itemId) => {
  return state.get('todos').findIndex(
    (item) => item.get('id') ===itemId
  )
}

const toggleComplete = (state, itemId) => {
  const itemIndex = findItemIndex(state, itemId)

  const updatedItem = state.get('todos')
    .get(itemIndex)
    .update('status', status => status === 'active' ? 'completed' : 'active')

  return state.update('todos', todos => todos.set(itemIndex, updatedItem))
}

const editItem = (state, itemId) => {
  const itemIndex = findItemIndex(state, itemId)

  const updatedItem = state.get('todos')
    .get(itemIndex)
    .set('editing', true)

  return state.update('todos', todos => todos.set(itemIndex, updatedItem))
}

const cancelEditing = (state, itemId) => {
  const itemIndex = findItemIndex(state, itemId)

  const updatedItem = state.get('todos')
    .get(itemIndex)
    .set('editing', false)

  return state.update('todos', todos => todos.set(itemIndex, updatedItem))
}

const doneEditing = (state, itemId, newText) => {
  const itemIndex = findItemIndex(state, itemId)

  const updatedItem = state.get('todos')
    .get(itemIndex)
    .set('editing', false)
    .set('text', newText)

  return state.update('todos', todos => todos.set(itemIndex, updatedItem))
}

const changeFilter = (state, filter) => {
  return state.set('filter', filter)
}

export default (state = Map(), action) => {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state)
    case 'TOGGLE_COMPLETE':
      return toggleComplete(state, action.itemId)
    case 'CHANGE_FILTER':
      return changeFilter(state, action.filter)
    case 'EDIT_ITEM':
      return editItem(state, action.itemId)
    case 'CANCEL_EDITING':
      return cancelEditing(state, action.itemId)
    case 'DONE_EDITING':
      return doneEditing(state, action.itemId, action.newText)
  }
  return state
}