import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import MenuTop from './MenuTop';
import TodoList from './TodoList';

const Main = ({ logged }) => (
  <div style={{padding: '4px'}}>
    {!logged && <Redirect to='/login' />}
    <MenuTop />
    <TodoList />
  </div>
)

Main.propTypes = {
  logged: PropTypes.bool
}

const mapStateToProps = state => ({
  logged: state.user.logged
})

export default connect(mapStateToProps)(Main);