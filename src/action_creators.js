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