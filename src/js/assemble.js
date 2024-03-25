import React from 'react';
import AssembleBody from './bodyContent/assembleBody';

class AssemblePage extends React.Component{
  render(){
    if(this.props.assemblePageOn){
      return(
        <div className="assembleBackground">

          <div className="assembleHeader">

            <span className="material-icons view">view_column</span>
            <span className="material-icons filter">filter_list</span>

            <div className="assembleSearch">
              <span className="material-icons">search</span>
              <input type="text" className="assembleSearchInput"></input>
            </div>

          </div>

          <div className="assembleBodyTitle">
            <div className="assembleId">id・ステータス・公開状況・再募集</div>
            <div className="assembleDuring">期間</div>
            <div className="assembleOnemore">再計算元</div>
            <div className="assembleRule">ルール</div>
            <div className="assembleDate">制作日時</div>
            <div className="assembleCreater">作成者</div>
          </div>


          <div className="assembleBodyContentContainer">

            <div className="assembleBodyContent">
              <AssembleBody date="7fd28c7e-c5bd-411d-a54d-4f310d3dfbdf"
              auto="自動編成完成"
              open="非公開"
              during="2024/04/01 ～ 2024/04/30"
              yesOrNo="なし"
              rule="基本ルール08 （4月ルール）"
              creat="2024/03/25 02:07:54"
              creater="シーライヴ開発チーム"/>
            </div>

            <div className="assembleBodyContent">
              <AssembleBody date="7fd28c7e-c5bd-411d-a54d-4f310d3dfbdf"
              auto="自動編成完成"
              open="非公開"
              during="2024/04/01 ～ 2024/04/30"
              yesOrNo="なし"
              rule="基本ルール08 （4月ルール）"
              creat="2024/03/25 02:07:54"
              creater="シーライヴ開発チーム"/>
            </div>

            <div className="assembleBodyContent">
              <AssembleBody date="7fd28c7e-c5bd-411d-a54d-4f310d3dfbdf"
              auto="自動編成完成"
              open="非公開"
              during="2024/04/01 ～ 2024/04/30"
              yesOrNo="なし"
              rule="基本ルール08 （4月ルール）"
              creat="2024/03/25 02:07:54"
              creater="シーライヴ開発チーム"/>
            </div>

            <div className="assembleBodyContent">
              <AssembleBody date="7fd28c7e-c5bd-411d-a54d-4f310d3dfbdf"
              auto="自動編成完成"
              open="非公開"
              during="2024/04/01 ～ 2024/04/30"
              yesOrNo="なし"
              rule="基本ルール08 （4月ルール）"
              creat="2024/03/25 02:07:54"
              creater="シーライヴ開発チーム"/>
            </div>

            <div className="assembleBodyContent">
              <AssembleBody date="7fd28c7e-c5bd-411d-a54d-4f310d3dfbdf"
              auto="自動編成完成"
              open="非公開"
              during="2024/04/01 ～ 2024/04/30"
              yesOrNo="なし"
              rule="基本ルール08 （4月ルール）"
              creat="2024/03/25 02:07:54"
              creater="シーライヴ開発チーム"/>
            </div>

            <div className="assembleBodyContent">
              <AssembleBody date="7fd28c7e-c5bd-411d-a54d-4f310d3dfbdf"
              auto="自動編成完成"
              open="非公開"
              during="2024/04/01 ～ 2024/04/30"
              yesOrNo="なし"
              rule="基本ルール08 （4月ルール）"
              creat="2024/03/25 02:07:54"
              creater="シーライヴ開発チーム"/>
            </div>

            <div className="assembleBodyContent">
              <AssembleBody date="7fd28c7e-c5bd-411d-a54d-4f310d3dfbdf"
              auto="自動編成完成"
              open="非公開"
              during="2024/04/01 ～ 2024/04/30"
              yesOrNo="なし"
              rule="基本ルール08 （4月ルール）"
              creat="2024/03/25 02:07:54"
              creater="シーライヴ開発チーム"/>
            </div>

            <div className="assembleBodyContent">
              <AssembleBody date="7fd28c7e-c5bd-411d-a54d-4f310d3dfbdf"
              auto="自動編成完成"
              open="非公開"
              during="2024/04/01 ～ 2024/04/30"
              yesOrNo="なし"
              rule="基本ルール08 （4月ルール）"
              creat="2024/03/25 02:07:54"
              creater="シーライヴ開発チーム"/>
            </div>

            <div className="assembleBodyContent">
              <AssembleBody date="7fd28c7e-c5bd-411d-a54d-4f310d3dfbdf"
              auto="自動編成完成"
              open="非公開"
              during="2024/04/01 ～ 2024/04/30"
              yesOrNo="なし"
              rule="基本ルール08 （4月ルール）"
              creat="2024/03/25 02:07:54"
              creater="シーライヴ開発チーム"/>
            </div>

            <div className="assembleBodyContent">
              <AssembleBody date="7fd28c7e-c5bd-411d-a54d-4f310d3dfbdf"
              auto="自動編成完成"
              open="非公開"
              during="2024/04/01 ～ 2024/04/30"
              yesOrNo="なし"
              rule="基本ルール08 （4月ルール）"
              creat="2024/03/25 02:07:54"
              creater="シーライヴ開発チーム"/>
            </div>

            <div className="assembleBodyContent">
              <AssembleBody date="7fd28c7e-c5bd-411d-a54d-4f310d3dfbdf"
              auto="自動編成完成"
              open="非公開"
              during="2024/04/01 ～ 2024/04/30"
              yesOrNo="なし"
              rule="基本ルール08 （4月ルール）"
              creat="2024/03/25 02:07:54"
              creater="シーライヴ開発チーム"/>
            </div>
          </div>




        </div>
      )
    }
  }
}

export default AssemblePage;