import React, { Component } from 'react';
import Timer from './Timer';

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
        />
    ));

    return (
        <div id='timers' className="container">
          {timers}
        </div>
    );
  }
}

export default TimerList;
