import React from 'react';
import TOPs from './bodyContent/TOPs';

class TOPspage extends React.Component{
  render(){
    if(this.props.topsPageOn){
      return(
        <div class="topsContent">
          <h2 class="countNumber">現在のメンバー数:32</h2>
          <div class="toGoShift topsBt">チームのシフト表へ</div>
          <h3 class="printName">新着通知</h3>
  
          <TOPs 
          shift = 'shift' 
          text ='2024年04月01日 ～ 2024年04月30日 のシフトが公開されました'
          day ='2024-03-04 14:43'
          /> 
  
          <TOPs 
          shift = 'shift' 
          text ='2024年03月01日 ～ 2024年03月31日 のシフトが公開されました。'
          day ='2024-03-01 10:49'
          /> 
  
          <TOPs 
          shift = 'shift' 
          text ='2023年12月01日 ～ 2023年12月31日 のシフトが公開されました。'
          day ='2024-01-25 14:10'
          /> 
  
          <TOPs 
          shift = 'changeShift' 
          text ='管理者が 林 慎一郎2 さんから 林003 さんへのシフト交換の依頼を承認しました。'
          day ='2023-11-08 14:29'
          /> 
  
          <TOPs 
          shift = 'changeShift' 
          text ='林003 さんが林 慎一郎2 さんからのシフト交換の依頼を承認しました。'
          day ='2023-11-08 14:28'
          />
  
          <TOPs 
          shift = 'changeShift' 
          text ='林003 さんが林 慎一郎2 さんからのシフト交換の依頼を承認しました。'
          day ='2023-11-08 14:28'
          />
  
          <TOPs 
          shift = 'changeShift' 
          text ='林 慎一郎2 さんが 林003 さんへシフト交換を依頼しました。'
          day ='2023-11-08 14:28'
          />
  
          <TOPs 
          shift = 'changeShift' 
          text ='管理者が 林 慎一郎2 さんから 林003 さんへのシフト交換の依頼を却下しました。'
          day ='2023-11-08 14:25'
          />
  
          <TOPs 
          shift = 'changeShift' 
          text ='林003 さんが林 慎一郎2 さんからのシフト交換の依頼を承認しました。。'
          day ='2023-11-08 14:28'
          />
  
          <TOPs 
          shift = 'shift' 
          text ='2023年11月01日 ～ 2023年11月30日 のシフトが公開されました。'
          day ='2023-11-06 10:26'
          />
  
          <div class="topsBt toMore">さらに通知を表示する</div>
        </div>
      )
    }else {
      return(
        console.log('画面を映していません。')
      );
    }
    
  }
}

export default TOPspage;