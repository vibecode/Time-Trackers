import React, { Component } from 'react';
import TimerScreen from './TimerScreen';
import TimerForm from './TimerForm';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editFormOpen: false
    };
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFormClose = this.handleFormClose.bind(this);
  }

  handleEditClick() {
    this.openForm();
  }

  handleFormClose(e) {
    e.preventDefault();
    this.closeForm();
  }

  handleSubmit(timer) {
    this.props.onFormSubmit(timer);
    this.closeForm();
  }

  closeForm() {
    this.setState({
      editFormOpen: false
    });
  }

  openForm() {
    this.setState({
      editFormOpen: true
    })
  }

  render() {
    if (this.state.editFormOpen) {
      return (
          <TimerForm
              id={this.props.id}
              title={this.props.title}
              project={this.props.project}
              onFormSubmit={this.handleSubmit}
              onFormClose={this.handleFormClose}
          />
      );
    } else {
      return (
          <TimerScreen
              id={this.props.id}
              title={this.props.title}
              project={this.props.project}
              elapsed={this.props.elapsed}
              runningSince={this.props.runningSince}
              onTrashClick={this.props.onTrashClick}
              onEditClick={this.handleEditClick}
          />
      );
    }
  }
}

export default Timer;
