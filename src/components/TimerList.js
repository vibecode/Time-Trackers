import React, { Component } from 'react';
import Timer from './Timer';

class TimerList extends Component {
  render() {
    return (
        <div id='timers'>
          <Timer
              title='Goodbuy World'
              project='Dr. Manchetten'
              elapsed='8986300'
              runningSince={null}
              editFormOpen={false}
          />

          <Timer
              title='Learn extreme ironing'
              project='World Domination'
              elapsed='3890985'
              runningSince={null}
              editFormOpen={true}
          />
        </div>
    );
  }
}

export default TimerList;
