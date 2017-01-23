import React, { Component } from 'react';
import { Card, Header, Icon, Statistic, StatisticValue } from 'semantic-ui-react';
import { renderElapsedTime } from '../helpers';
import TimerActionButton from './TimerActionButton';

class TimerScreen extends Component {
  constructor(props) {
    super(props);
    this.handleTrashClick = this.handleTrashClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
  }

  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }

  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }

  handleTrashClick() {
    this.props.onTrashClick(this.props.id);
  }

  handleStartClick() {
    this.props.onStartClick(this.props.id);
  }

  handleStopClick() {
    this.props.onStopClick(this.props.id);
  }

  render() {
    const elapsedTime = renderElapsedTime(
        this.props.elapsed, this.props.runningSince
    );

    return (
        <Card centered>
          <div className='center aligned content'>
            <div className='extra content left aligned'>
              <Icon name='trash' onClick={this.handleTrashClick} />
              <Icon name='write' onClick={this.props.onEditClick} />
            </div>

            <Header size='large'>
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

            <TimerActionButton
                timerIsRunning={!!this.props.runningSince}
                onStartClick={this.handleStartClick}
                onStopClick={this.handleStopClick}
            />
          </div>
        </Card>
    );
  }
}

export default TimerScreen;
