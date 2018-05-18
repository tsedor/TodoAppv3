import {
  ADD_TODO,
  FETCH_TODOS_SUCCESS,
  REMOVE_TODO,
  SORT,
  TOGGLE_ADD_TODO_MODAL,
  TOGGLE_TODO,
  UPDATE_SEARCH_VALUE,
  TOGGLE_ACTIVE,
  TOGGLE_COMPLETED,
} from '../actions/const';

const initialState = {
  filter: {
    active: true,
    completed: true,
  },
  searchValue: '',
  sorting: 'asc',
  todos: [],
  visibilityAddTodoModal: false,
};

const removeTodo = (todos, id) => todos.filter(todo => todo.id !== id);
const toggleTodo = (todos, id) => (
  todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)));

let maxId = 0;
let todosList;

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      todosList = state.todos;
      todosList.map(todo => todo.id > maxId && (maxId = todo.id));
      todosList.push({ id: maxId += 1, text: action.text, done: false });
      return { ...state, todos: todosList, visibilityAddTodoModal: false };
    case FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.todos };
    case SORT:
      return { ...state, sorting: state.sorting === 'asc' ? 'desc' : 'asc' };
    case REMOVE_TODO:
      return { ...state, todos: removeTodo(state.todos, action.id) };
    case TOGGLE_ADD_TODO_MODAL:
      return { ...state, visibilityAddTodoModal: !state.visibilityAddTodoModal };
    case TOGGLE_ACTIVE:
      return { ...state, filter: { ...state.filter, active: !state.filter.active } };
    case TOGGLE_COMPLETED:
      return { ...state, filter: { ...state.filter, completed: !state.filter.completed } };
    case TOGGLE_TODO:
      return { ...state, todos: toggleTodo(state.todos, action.id) };
    case UPDATE_SEARCH_VALUE:
      return { ...state, searchValue: action.text };
    default:
      return state;
  }
};

export default todos;
