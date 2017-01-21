import React, { Component } from 'react';
import { Card, Form, FormField, Button, ButtonGroup } from 'semantic-ui-react';

class TimerForm extends Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';

    return (
        <Card centered>
          <div className='content'>
            <Form>
              <FormField>
                <label>Title</label>
                <input type='text' defaultValue={this.props.title} />
              </FormField>

              <FormField>
                <label>Project</label>
                <input type='text' defaultValue={this.props.project} />
              </FormField>

              <ButtonGroup attached={'bottom'} size={2}>
                <Button basic color={'red'}>
                  {submitText}
                </Button>
                <Button basic color={'red'}>
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
