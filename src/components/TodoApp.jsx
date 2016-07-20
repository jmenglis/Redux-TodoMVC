import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoHeader from './TodoHeader'
import TodoTools from './TodoTools'
import Footer from './Footer'

export default class TodoApp extends Component {
  getNbActiveItems() {
    if (this.props.todos) {
      const activeitems = this.props.todos.filter(
        (item) => item.get('status') === 'active'
      )
      return activeItems.size
    }
    return 0
  }
  render() {
    return <div>
      <section className="todoapp">
        <TodoHeader />
        <TodoList todos={this.props.todos} filter={this.props.filter} />
        <TodoTools fitler={this.props.filter} nbActiveItems={this.getNbActiveItems()} />
      </section>
      <Footer />
    </div>
  }
}