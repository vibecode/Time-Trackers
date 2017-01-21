import React, { Component } from 'react';
import { Card, Button, Header, Icon } from 'semantic-ui-react';

class TimerScreen extends Component {
  render() {
    const elapsedString = ''; // TODO helpers.renderElapsedString(this.props.elapsed);

    return (
        <Card centered>
          <div className='content'>
            <Header>
              {this.props.title}
            </Header>

            <div className='meta'>
              {this.props.object}
            </div>

            <div className='center aligned description'>
              <h2>
                {elapsedString}
              </h2>
            </div>

            <div className='extra content'>
              <Icon name={'trash'} />
              <Icon name={'edit'} />
            </div>

            <Button basic color={'blue'} attached={'bottom'}>
              Start
            </Button>
          </div>
        </Card>
    );
  }
}

export default TimerScreen;
