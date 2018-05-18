import React from 'react';
import { Button, Input, Label, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addTodo, toggleAddTodoModal } from '../actions/todolist';

class TodoModal extends React.Component {
  constructor() {
    super();
    this.state = {
      addTodoInput: '',
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.checkLength = this.checkLength.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  updateInputValue(e) {
    this.setState({
      addTodoInput: e.target.value,
      error: false,
    });
  }
  checkLength() {
    if (this.state.addTodoInput.length > 0) {
      this.setState({ error: false });
      this.props.addTodo(this.state.addTodoInput);
      this.setState({ addTodoInput: '' });
    } else {
      this.setState({ error: true });
    }
  }
  closeModal() {
    this.setState({ error: false });
    this.props.toggleAddTodoModal();
  }
  render() {
    const {
      visibilityAddTodoModal,
    } = this.props;
    return (
      <Modal open={visibilityAddTodoModal} size="tiny">
        <Modal.Header>Dodaj zadanie</Modal.Header>
        <Modal.Content>
          {this.state.error && <Label color="red" pointing="below" style={{ position: 'absolute', top: '51px' }}>Treść zadania nie może być pusta</Label>}
          <Input placeholder="Podaj treść" fluid onChange={this.updateInputValue} value={this.state.addTodoInput} error={this.state.error} />
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={this.closeModal}>
            Anuluj
          </Button>
          <Button positive icon="checkmark" labelPosition="right" content="Dodaj" onClick={this.checkLength} />
        </Modal.Actions>
      </Modal>
    );
  }
}

TodoModal.propTypes = {
  addTodo: PropTypes.func.isRequired,
  toggleAddTodoModal: PropTypes.func.isRequired,
  visibilityAddTodoModal: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  visibilityAddTodoModal: state.todos.visibilityAddTodoModal,
});

const mapDispatchToProps = ({
  addTodo,
  toggleAddTodoModal,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoModal);
