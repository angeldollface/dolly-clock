/*
DOLLY CLOCK by Alexander Abraham, a.k.a. "Angel Dollface".
Licensed under the MIT license.
*/

// Importing methods
// for managing states.
import {
  useState,
  useEffect
} from 'react';

// Importing React to define our
// component.
import React from 'react';

// Importing types for Typescript.
import { ReactElement } from 'react';

// Defining our class-based component.
export class ClockCog extends React.Component<
  {}, 
  {
    timeNow: string,
    dateNow: string,
    now: Date
  }
> {
  interval: any;
  constructor(props: any) {
    super(props);
    this.state = {
      timeNow: '',
      dateNow: '',
      now: new Date()
    }
  }

  updateStrings(): void {
    let hours: number = this.state.now.getHours();
    let minutes: number = this.state.now.getMinutes();
    let seconds: number = this.state.now.getSeconds();
    let year: number = this.state.now.getFullYear();
    let month: number = this.state.now.getMonth();
    let day: number = this.state.now.getDay();
    let timeString: string = 
      hours.toString() + ':' + minutes.toString() 
      + ':' + seconds.toString();
    let dateString: string = 
      year.toString() + '/' + month.toString() + '/' + day.toString();
      this.setState(
        {
          timeNow: timeString,
          dateNow: dateString,
          now: new Date()
        }
      );
  }

  // Returning our stateful
  // clock element.
  render(): ReactElement {
    return (
      <div className='time'>
       <p className='time'>{this.state.timeNow}</p>
       <p className='date'>{this.state.dateNow}</p>
      </div>			
    );
  }
  componentDidMount(): void {
    this.interval = setInterval(
      () => {
        this.updateStrings()
      }, 
      1000
    );
    }
  componentWillUnmount(): void {
    clearInterval(this.interval);
  }
}
export default ClockCog;