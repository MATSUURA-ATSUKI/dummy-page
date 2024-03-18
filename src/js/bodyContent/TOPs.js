import React from 'react';

class TOPs extends React.Component{
  render(){
    if(this.props.shift ==='shift'){
      return(
        <div class="topsContentBox">
          <div class="shift">シフト</div>
          <div>
          <div class="text">{this.props.text}</div>
          <div class="day">{this.props.day}</div>
          </div>
        </div>
      )
    } else{
      return(
        <div class="topsContentBox">
          <div class="changeShift">シフト交換</div>
          <div>
          <div class="text">{this.props.text}</div>
          <div class="day">{this.props.day}</div>
          </div>
        </div>
      )
    }
  }
}

export default TOPs;