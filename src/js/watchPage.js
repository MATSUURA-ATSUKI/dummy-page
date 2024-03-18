import React from 'react';
import CalenderBody from './bodyContent/calenderBody';

class WatchPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      inputValue:'',
    };

  }

  render(){


    const handleInputChange = (event) => {
      this.setState({inputText:event.target.value});
    };

    const handleDivClick = () => {
      this.setState({inputValue : this.state.inputText});
    };

    if(this.props.watchPageOn){
      return(
        <div className="watchContent">

          <div className ="dayCall">
            <div className="dateConection">

              {/* 左側 */}
              <div className="NarrowDownContainer">
                <div className="NarrowDownContainerInTop">
                  <span className="material-icons content"> help_outline </span>
                  <span className="material-icons content">star_border</span>
                  <div className="NarrowDown content"><span class="material-icons">filter_list</span>絞り込み</div>
                  <div className="sort content">ソート▼</div>
                </div>
                <div className="NarrowDownContainerInBottom">
                  <span className="material-icons">people</span>
                  <span className="material-icons">swap_horiz</span>
                  <span className="material-icons ">inventory_2</span>
                </div>
              </div>

              {/* 真ん中 */}
              <div className ="dayCallContainer">
              <span className="material-icons">arrow_back_ios</span><span className="detailedSchedule">２０２４年３月１３日（水）</span><span className="material-icons">arrow_forward_ios</span>
              </div>

              {/* 右側 */}
              <div className="materialContainer">
                <span className="material-icons">help_outline</span>
                <span className="material-icons">event</span>
                <span className="material-icons">calendar_view_day</span>
                <span className="material-icons">view_week</span>
                <span className="material-icons">calendar_view_month</span>
                <span className="material-icons">date_range</span>
                <span className="material-icons">more_vert</span>
                <div class="search">
                  <span class="material-icons">search</span>
                  <input type="text" onChange ={handleInputChange}></input>
                  <div class="searchOn" onClick={handleDivClick}>検索</div>
                </div>
              </div>
           </div>
          </div>

          {/* カレンダー */}

          <div className="calenderInfo">
            <div className="CalendarDetails">
              <div className="calenderDay">日</div>
              <div className="hour">時間</div>
              <div class="label">こよみラベル</div>
              <div class="split">割当数</div>
            </div>
            <div class="calenderBodyContainer">
            <CalenderBody date="3月12日(水)" inputValueOn ={this.state.inputValue}/>
            </div>
          </div>
        </div>
      )
    }
    
  }
}


export default WatchPage;