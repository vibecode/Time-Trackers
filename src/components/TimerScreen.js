import React, { Component } from 'react';
import { Card, Button, Header, Icon, Statistic, StatisticValue } from 'semantic-ui-react';
import { renderElapsedTime } from '../helpers';

class TimerScreen extends Component {
  render() {
    const elapsedTime = renderElapsedTime(this.props.elapsed);

    return (
        <Card centered>
          <div className='center aligned content'>
            <Header>
              {this.props.title}
            </Header>

            <div className='center aligned meta'>
              {this.props.project}
            </div>

            <Statistic color='violet'>
              <StatisticValue>
                {elapsedTime}
              </StatisticValue>
            </Statistic>

            <div className='extra content'>
              <Icon name={'trash'} />
              <Icon name={'edit'} />
            </div>

            <Button basic color={'violet'} attached={'bottom'}>
              Start
            </Button>
          </div>
        </Card>
    );
  }
}

export default TimerScreen;
