import './App.css';
import './css/menuber.css';
import './css/body.css'
import img from './image/logo_white.png';

function App() {
return (
<div className="App">
  <div class ="body">
    <div class="menuber">
      <div class="menuberFont">
        <div class="hospiFont"><img src={img} class="hospiPhotoImage"></img></div>
        <h2 class="underFont">特養ホームほすぴタッチの里</h2>
        <p class="underFont">7d5843de-4d6f-46f9-bee8-040ef110da69</p>
      </div>
      <div class="menuberBody">
      <div>ホーム</div>
      <hr></hr>
      <ul>
        <li>管理画面TOP</li>
        <li>シフトを見る</li>
        <li>シフト編成</li>
        <li>メンバー管理</li>
        <li>シフト設定</li>
        <li>こよみラベル設定</li>
        <li>ルール設定</li>
        <li>シフト希望一覧</li>
        <li>シフト交換履歴</li>
        <li>チーム設定</li>
        <li>請求・決済</li>
      </ul>
      <div class="menufoot">サポートセンター</div>
      <div class="menufoot">公式ウェブサイト</div>
    </div>
    </div>
    <div class="titleBer"></div>
  </div>
</div>
);
}

export default App;
