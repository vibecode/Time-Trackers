import React, { Component } from 'react';
import {
  Card,
  Icon,
  Statistic,
  StatisticValue,
  CardMeta,
  CardHeader,
  CardContent
} from 'semantic-ui-react';
import { renderElapsedTime } from '../helpers';
import TimerActionButton from './TimerActionButton';

class TimerScreen extends Component {
  constructor(props) {
    super(props);
    this.handleTrashClick = this.handleTrashClick.bind(this);
    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
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
        <Card raised>
          <CardContent extra>
            <Icon name='trash' onClick={this.handleTrashClick} />
            <Icon name='write' onClick={this.props.onEditClick} />
          </CardContent>

          <CardContent className='center aligned'>
            <CardHeader size='large'>
              {this.props.title}
            </CardHeader>

            <CardMeta>
              {this.props.project}
            </CardMeta>

            <Statistic color='violet' size='small'>
              <StatisticValue>
                {elapsedTime}
              </StatisticValue>
            </Statistic>
          </CardContent>

          <CardContent extra>
            <TimerActionButton
                timerIsRunning={!!this.props.runningSince}
                onStartClick={this.handleStartClick}
                onStopClick={this.handleStopClick}
            />
          </CardContent>
        </Card>
    );
  }
}

export default TimerScreen;
