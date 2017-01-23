import React, { Component } from 'react';
import { Card, Form, FormField, Button, ButtonGroup } from 'semantic-ui-react';

class TimerForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onFormSubmit({
      id: this.props.id,
      title: this.refs.title.value,
      project: this.refs.project.value,
    });
  }

  render() {
    const submitText = this.props.id ? 'Update' : 'Create';

    return (
        <Card centered>
          <div className='content'>
            <Form>
              <FormField>
                <label>Title</label>
                <input type='text' ref='title' defaultValue={this.props.title} />
              </FormField>

              <FormField>
                <label>Project</label>
                <input type='text' ref='project' defaultValue={this.props.project} />
              </FormField>

              <ButtonGroup attached={'bottom'}>
                <Button basic color={'violet'} onClick={this.handleSubmit}>
                  {submitText}
                </Button>
                <Button basic color={'red'} onClick={this.props.onFormClose} >
                  Cancel
                </Button>
              </ButtonGroup>
            </Form>
          </div>
        </Card>
    );
  }
}

export default TimerForm;
