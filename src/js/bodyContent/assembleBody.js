import React from 'react';

class AssembleBody extends React.Component{
  render(){
    return(
      <div className="shiftAssemble">
        <span class="material-icons">search</span>
        <div className="boxContainer">
          <div className="date">{this.props.date}</div>
          <div className="autoOpenContainer">
            <div className="auto">{this.props.auto}</div>
            <div className="open">{this.props.open}</div>
          </div>
        </div>
        <div className="during">{this.props.during}</div>
        <div className="yesOrNo">{this.props.yesOrNo}</div>
        <div className="rule">{this.props.rule}</div>
        <div className="creat">{this.props.creat}</div>
        <div className="creater">{this.props.creater}</div>
      </div>
    )
  }
}

export default AssembleBody;