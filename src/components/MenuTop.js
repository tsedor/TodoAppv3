import React from 'react';
import { Checkbox, Dropdown, Icon, Input, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { sort, toggleActive, toggleCompleted, toggleAddTodoModal, updateSearchValue } from '../actions/todolist';

const MenuTop = ({ filter, sort, sorting, toggleActive, toggleAddTodoModal, toggleCompleted, updateSearchValue }) => (
  <Menu attached="top">
    <Menu.Item onClick={toggleAddTodoModal}>
      <Icon name="plus" />
    </Menu.Item>
    <Dropdown item icon="filter" simple>
      <Dropdown.Menu>
        <Dropdown.Header>
          Pokaż:
        </Dropdown.Header>
        <Dropdown.Item onClick={toggleActive}>
          <Checkbox checked={filter.active} label="aktywne" />
        </Dropdown.Item>
        <Dropdown.Item onClick={toggleCompleted}>
          <Checkbox checked={filter.completed} label="zakończone"  />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item onClick={sort}>
      <Icon name={sorting === 'asc' ? 'sort alphabet ascending' : 'sort alphabet descending'} />
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Input 
          transparent 
          icon={{ name: 'search' }} 
          placeholder='Szukaj...' 
          onChange={e => updateSearchValue(e.target.value)} 
        />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

MenuTop.propTypes = {
  filter: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired
  }),
  sort: PropTypes.func.isRequired,
  sorting: PropTypes.string.isRequired,
  toggleActive: PropTypes.func.isRequired,
  toggleAddTodoModal: PropTypes.func.isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  updateSearchValue: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  searchValue: state.todos.searchValue,
  sorting: state.todos.sorting,
  filter: state.todos.filter
})

const mapDispatchToProps = {
  sort,
  toggleAddTodoModal,
  toggleCompleted,
  toggleActive,
  updateSearchValue
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuTop);