import React from 'react';
import { Button, Input, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addTodo, addTodoInputUpdate, toggleAddTodoModal } from '../actions/todolist';

const TodoModal = ({
  addTodo, addTodoValue, addTodoInputUpdate, toggleAddTodoModal, visibilityAddTodoModal,
}) => (
  <Modal open={visibilityAddTodoModal} size="tiny">
    <Modal.Header>Dodaj zadanie</Modal.Header>
    <Modal.Content>
      <Input placeholder="Podaj treść" fluid onChange={e => addTodoInputUpdate(e.target.value)} value={addTodoValue} error={false} />
    </Modal.Content>
    <Modal.Actions>
      <Button negative onClick={toggleAddTodoModal}>
        Anuluj
      </Button>
      <Button positive icon="checkmark" labelPosition="right" content="Dodaj" onClick={() => addTodo(addTodoValue)} />
    </Modal.Actions>
  </Modal>
);

TodoModal.propTypes = {
  addTodo: PropTypes.func.isRequired,
  addTodoValue: PropTypes.string.isRequired,
  addTodoInputUpdate: PropTypes.func.isRequired,
  toggleAddTodoModal: PropTypes.func.isRequired,
  visibilityAddTodoModal: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  addTodoValue: state.todos.addTodoValue,
  visibilityAddTodoModal: state.todos.visibilityAddTodoModal,
});

const mapDispatchToProps = ({
  addTodo,
  addTodoInputUpdate,
  toggleAddTodoModal,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal);
