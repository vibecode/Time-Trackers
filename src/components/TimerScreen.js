import React, { Component } from 'react';
import { Card, Button, Header, Icon, Statistic, StatisticValue } from 'semantic-ui-react';
import { renderElapsedTime } from '../helpers';

class TimerScreen extends Component {
  constructor(props){
    super(props);
    this.handleTrashClick = this.handleTrashClick.bind(this);
  }

  handleTrashClick() {
    this.props.onTrashClick(this.props.id);
  }

  render() {
    const elapsedTime = renderElapsedTime(this.props.elapsed);

    return (
        <Card centered>
          <div className='center aligned content'>
            <div className='extra content left aligned'>
              <Icon  name='trash' onClick={this.handleTrashClick}/>
              <Icon  name='write' onClick={this.props.onEditClick} />
            </div>

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

            <Button basic color={'violet'} attached={'bottom'}>
              Start
            </Button>
          </div>
        </Card>
    );
  }
}

export default TimerScreen;
