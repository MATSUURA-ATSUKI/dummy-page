import React from 'react';
import CalenderBodyContent from './calenderBodyContent'


class CalenderBody extends React.Component{


  render(){

    const numberOfDivs = 24; // 出力したいdivの数
    let hourDivs = [];
    let splitDivs =[];
    let teamDivs =[];

    for (let i = 0; i < numberOfDivs; i++) {
      hourDivs.push(<div className ="calenderHourDiv"key={i}>{i}</div>);
      splitDivs.push(<div className="splitDiv" key={i}>0</div>);
      teamDivs.push(<div className ="teamDiv"></div>)
    }

    
    
    return(
      <div className="calenderBody">

        <div className="standard">
          <div className="calenderDayBody">{this.props.date}</div>
          <div className ="calenderHourBody">{hourDivs}</div>
          <div className ="labelBody"></div>
          <div className ="splitBody">{splitDivs}</div>
        </div>

        <div class="teams">
          <CalenderBodyContent name="田中" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="新谷" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="小林" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="中居" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="新道" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="石塚" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="泉" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="新海" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="松浦" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="森" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="中野" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="永井" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="谷口" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="矢口"inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="橋本"inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="高橋"inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="広瀬" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="田代" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="細谷" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="太田" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="斉藤" inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="佐藤"inputValueOn={this.props.inputValueOn}/>
          <CalenderBodyContent name="大林"inputValueOn={this.props.inputValueOn}/>
        </div>


        
      </div>
    )
  }
}

export default CalenderBody;