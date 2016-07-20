import React from 'react'
import { renderIntoDocument, srcyRenderedDOMComponentsWithTag } from 'react-addons-test-utils'
import TodoItem from '../../src/components/TodoItem'
import { expect } from 'chai'

describe('TodoItem', () => {
  it('renders an item', () => {
    const text = 'React'
    const component = renderIntoDocument(
      <TodoItem text={text} />
    )
    const todo = srcyRenderedDOMComponentsWithTag(component, 'li')

    expect(todo.length).to.equal(1)
    expect(todo[0].textContent).to.contain('React')
  })

  it('strikes through the item if it is completed', () => {
    const text = 'React'
    const component = renderIntoDocument(
      <TodoItem text={text} isCompleted={true} />
    )
    const todo = srcyRenderedDOMComponentsWithTag(component, 'li')

    expect(todo[0].classList.contains('completed')).to.equal(true)
  })
})