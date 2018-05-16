import React from 'react';
import { Checkbox, Icon, List, Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchTodos, removeTodo, toggleTodo } from '../actions/todolist';
import TodoModal from './TodoModal';

class TodoList extends React.Component {
  componentDidMount() {
    if (this.props.logged) {
      this.props.fetchTodos();
    }
  }
  render() {
    const { todos, removeTodo, toggleTodo } = this.props;
    return (
      <Segment attached="bottom">
        <TodoModal />
        <List divided relaxed>
          {todos.length > 0 ? todos.map(todo => (
            <List.Item key={todo.id} style={{ cursor: 'pointer' }}>
              <List.Content floated="right" style={{ cursor: 'pointer' }}>
                <Icon name="remove" onClick={() => removeTodo(todo.id)} />
              </List.Content>
              <List.Content style={{ textDecoration: todo.done && 'line-through' }} onClick={() => toggleTodo(todo.id)}>
                <Checkbox checked={todo.done} label=" " style={{ paddingTop: '3px' }} />
                {todo.text}
              </List.Content>
            </List.Item>
          )) : 'Brak zadań'}
        </List>
      </Segment>
    );
  }
}

TodoList.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
  logged: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

const searchSelector = (todos, searchValue) => todos.filter(todo =>
  todo.text.toLowerCase().includes(searchValue.toLowerCase()));
const sortAsc = todos => todos.sort((t1, t2) => (t1.text < t2.text ? -1 : 1));
const sortDesc = todos => todos.sort((t1, t2) => (t1.text > t2.text ? -1 : 1));
const sorting = (todos, sort) => (sort === 'asc' ? sortAsc(todos) : sortDesc(todos));

const filter = (todos, active, completed) => todos.filter(todo =>
  (todo.done === false && active === true) || (todo.done === true && completed === true));

const mapStateToProps = state => ({
  logged: state.user.logged,
  todos:
    filter(
      sorting(searchSelector(state.todos.todos, state.todos.searchValue), state.todos.sorting),
      state.todos.filter.active, state.todos.filter.completed,
    ),
});

const mapDispatchToProps = {
  fetchTodos,
  removeTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
