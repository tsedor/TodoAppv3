import {
  ADD_TODO,
  ADD_TODO_INPUT_UPDATE,
  FETCH_TODOS,
  REMOVE_TODO,
  SORT,
  TOGGLE_ADD_TODO_MODAL,
  TOGGLE_TODO,
  UPDATE_SEARCH_VALUE,
  TOGGLE_ACTIVE,
  TOGGLE_COMPLETED,
} from './const';

export const addTodo = text => ({
  type: ADD_TODO,
  text,
});

export const addTodoInputUpdate = value => ({
  type: ADD_TODO_INPUT_UPDATE,
  value,
});

export const fetchTodos = () => ({
  type: FETCH_TODOS,
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id,
});

export const sort = () => ({
  type: SORT,
});

export const toggleActive = () => ({
  type: TOGGLE_ACTIVE,
});

export const toggleAddTodoModal = () => ({
  type: TOGGLE_ADD_TODO_MODAL,
});

export const toggleCompleted = () => ({
  type: TOGGLE_COMPLETED,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const updateSearchValue = value => ({
  type: UPDATE_SEARCH_VALUE,
  value,
});
