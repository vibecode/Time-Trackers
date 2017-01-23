import React, { Component } from 'react';
import Timer from './Timer';
import AddTimerForm from './AddTimerForm';
import { CardGroup } from 'semantic-ui-react';

class TimerList extends Component {
  render() {
    const timers = this.props.timers.map((timer) => (
        <Timer
            key={timer.id}
            id={timer.id}
            title={timer.title}
            project={timer.project}
            elapsed={timer.elapsed}
            runningSince={timer.runningSince}
            onFormSubmit={this.props.onFormSubmit}
            onTrashClick={this.props.onTrashClick}
            onStartClick={this.props.onStartClick}
            onStopClick={this.props.onStopClick}
        />
    ));

    return (
        <CardGroup itemsPerRow={3} stackable>
          {timers}
          <AddTimerForm onFormSubmit={this.props.onAddTimerFormClick}/>
        </CardGroup>
    );
  }
}

export default TimerList;
