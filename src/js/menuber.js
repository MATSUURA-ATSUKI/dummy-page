import React from 'react';
import img from '../image/logo_white.png';
import Titleber from './titleber';
import TOPspage from './TOPspage';
import WatchPage from './watchPage';


class Menuber extends React.Component{
  
  
  constructor(props){
    super(props);
    this.state ={
      tops:'menuBt on',
      watch:'menuBt off',
      assemble:'menuBt off',
      member:'menuBt off',
      shift:'menuBt off',
      rabel:'menuBt off',
      rule:'menuBt off',
      want:'menuBt off',
      change:'menuBt off',
      team:'menuBt off',
      pay:'menuBt off',
      titleName: '管理画面TOP',
      topsOn:true,
      watchOn:false,
      assembleOn:false,
      memberOn:false,
      shiftOn:false,
      rabelOn:false,
      ruleOn:false,
      wantOn:false,
      changeOn:false,
      teamOn:false,
      payOn:false,
    };
  }

  changeBackground = (props) => {
  
    this.setState({
      tops:'menuBt off',
      watch:'menuBt off',
      assemble:'menuBt off',
      member:'menuBt off',
      shift:'menuBt off',
      rabel:'menuBt off',
      rule:'menuBt off',
      want:'menuBt off',
      change:'menuBt off',
      team:'menuBt off',
      pay:'menuBt off',
      titleName: '管理画面TOP',
      topsOn:false,
      watchOn:false,
      assembleOn:false,
      memberOn:false,
      shiftOn:false,
      rabelOn:false,
      ruleOn:false,
      wantOn:false,
      changeOn:false,
      teamOn:false,
      payOn:false,
    });
    
      if(props === 'topsOn'){
        this.setState({tops:'menuBt on',titleName:'管理画面TOP',topsOn:true});
      }else if(props === 'watchOn'){
        this.setState({watch:'menuBt on',titleName:'シフトを見る',watchOn:true})
      }else if(props === 'assembleOn'){
        this.setState({assemble:'menuBt on',titleName:'シフト編成',assembleOn:true})
      }else if(props === 'memberOn'){
        this.setState({member:'menuBt on',titleName:'メンバー管理',memberOn:true})
      }else if(props === 'shiftOn'){
        this.setState({shift:'menuBt on',titleName:'シフト設定',shiftOn:true})
      }else if(props === 'rabelOn'){
        this.setState({rabel:'menuBt on',titleName:'こよみラベル設定',rabelOn:true})
      }else if(props === 'ruleOn'){
        this.setState({rule:'menuBt on',titleName:'ルール設定',ruleOn:true})
      }else if(props === 'wantOn'){
        this.setState({want:'menuBt on',titleName:'シフト希望一覧',wantOn:true})
      }else if(props === 'changeOn'){
        this.setState({change:'menuBt on',titleName:'シフト交換一覧',changeOn:true})
      }else if(props === 'teamOn'){
        this.setState({change:'menuBt on',titleName:'チーム設定',teamOn:true})
      }else if(props === 'payOn'){
        this.setState({pay:'menuBt on',titleName:'請求決済',payOn:true})
      }

      console.log('good');
  }

  
 

  render(){

   
    return(
      <div>

        <div className="menuber">
          <div className="menuberFont">
            <div className="hospiFont">
            <img src={img} className="hospiPhotoImage"></img>
              <span className="material-icons">menu</span>
            </div>
            <h2 className="underFont">特養ホームほすぴタッチの里</h2>

            <p className="underFont">7d5843de-4d6f-46f9-bee8-040ef110da69<span className="material-icons">content_copy</span></p>
          </div>

          <div className="menuberBody">
            <div className="menuBt" ><div><span className="material-icons">home</span>ホーム</div></div>
            <hr/>
            <ul>

            <li className={this.state.tops}  id="tops" onClick ={() => {this.changeBackground('topsOn')}}><div><span className="material-icons"> extension </span>管理画面TOP</div></li>

            <li class={this.state.watch} onClick={()=>{this.changeBackground('watchOn')}}><div><span className="material-icons">schedule</span>シフトを見る</div></li>

            <li className={this.state.assemble}  onClick ={() => {this.changeBackground('assembleOn')}}><div><span className="material-icons"> construction </span>シフト編成</div></li>

            <li className={this.state.member}  onClick ={() => {this.changeBackground('memberOn')}}><div><span className="material-icons"> people </span>メンバー管理</div></li>

            <li className={this.state.shift}  onClick ={() => {this.changeBackground('shiftOn')}}><div><span className="material-icons"> date_range </span>シフト設定</div></li>

            <li className={this.state.rabel} onClick ={() => {this.changeBackground('rabelOn')}}><div><span className="material-icons"> calendar_month </span>こよみラベル設定</div></li>

            <li className={this.state.rule} onClick ={() => {this.changeBackground('ruleOn')}}><div><span className="material-icons"> rule </span>ルール設定</div></li>

            <li className={this.state.want}  onClick ={() => {this.changeBackground('wantOn')}}><div><span className="material-icons"> message </span>シフト希望一覧</div></li>

            <li className={this.state.change}  onClick ={() => {this.changeBackground('changeOn')}}><div><span className="material-icons"> change_circle </span>シフト交換履歴</div></li>

            <li className={this.state.team}  onClick ={() => {this.changeBackground('teamOn')}}><div><span className="material-icons"> settings </span>チーム設定</div></li>

            <li className={this.state.pay}  onClick ={() => {this.changeBackground('payOn')}}><div><span className="material-icons"> credit_card </span>請求・決済</div></li>
            </ul>
            <hr/>
          <div className="menufoot menuBt"><div>サポートセンター</div></div>
            <div className="menufoot menuBt"><div>公式ウェブサイト</div></div>
          </div>
        </div>
        <Titleber title ={this.state.titleName}/>
        <TOPspage topsPageOn = {this.state.topsOn}/>
        <WatchPage watchPageOn = {this.state.watchOn}/>
      </div>
    );
  }
}

export default Menuber;