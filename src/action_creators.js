export const toggleComplete = (itemId) => {
  return {
    type: 'TOGGLE_COMPLETE',
    itemId
  }
}

export const changeFilter = (filter) => {
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}

export const editItem = (itemId) => {
  return {
    type: 'EDIT_ITEM',
    itemId
  }
}

export const cancelEditing = (itemId) => {
  return {
    type: 'CANCEL_EDITING',
    itemId
  }
}

export const doneEditing = (itemId, newText) => {
  return {
    type: 'DONE_EDITING',
    itemId,
    newText
  }
}


export const clearCompleted = () => {
  return {
    type: 'CLEAR_COMPLETED'
  }
}

export const addItem = (text) => {
  return {
    type: 'ADD_ITEM',
    text
  }
}

export const deleteItem = (itemId) => {
  return {
    type: 'DELETE_ITEM',
    itemId
  }
}