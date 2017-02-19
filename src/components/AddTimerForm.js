import React, { Component } from 'react';
import TimerForm from './TimerForm';
import { Button, Card, CardContent, CardHeader } from 'semantic-ui-react';

class AddTimerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.handleFormOpen = this.handleFormOpen.bind(this);
    this.handleFormClose = this.handleFormClose.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormOpen() {
    this.setState({
      isOpen: true
    });
  }

  handleFormClose(e) {
    e.preventDefault();
    this.setState({
      isOpen: false
    });
  }

  handleFormSubmit(timer) {
    this.props.onFormSubmit(timer);
    this.setState({
      isOpen: false
    });
  }

  render() {
    if (this.state.isOpen) {
      return (
          <TimerForm
              onFormSubmit={this.handleFormSubmit}
              onFormClose={this.handleFormClose}
          />
      )
    } else {
      return (
          <Card raised className='add-timer-card'>
            <Button className='add-timer-button' icon='plus' color='violet' onClick={this.handleFormOpen} />
            <h1 className="add-timer-title center aligned">Add new timer</h1>
          </Card>
      );
    }
  }
}

export default AddTimerForm;
