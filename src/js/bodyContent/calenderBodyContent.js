import React from 'react';

class CalenderBodyContent extends React.Component{
  
  render(){
    const numberOfDivs = 24;
    let teamDivs =[];

    for (let i = 0; i < numberOfDivs; i++) {
      teamDivs.push(<div className ="teamDiv"></div>)
    }

    const str =this.props.name;
    const searchTerm = this.props.inputValueOn

    if(str === searchTerm){
      return(
        <div class="teamcalender on">
          <div className="calenderTeamName">{this.props.name}</div>
          <div className ="teamNameBody">{teamDivs}</div>
        </div>
      )
    }else{
      return(
      <div class="teamcalender">
          <div className="calenderTeamName off">{this.props.name}</div>
          <div className ="teamNameBody">{teamDivs}</div>
        </div>
      )
    }

  }
}

export default CalenderBodyContent;