import React from 'react';
import img from '../image/c-live.gif'
class Titleber extends React.Component{
  render(){
    let titlePhrase = this.props.title ;
    return(
      <div class="ber">
        <div class="titleberPhrase">{titlePhrase}</div>
        <div class="teamName">
          <div class="teamMark"><img src={img} /></div>
          <div>シーライヴ開発チーム</div>
        </div>
      </div>

    );
  }
}

export default Titleber;