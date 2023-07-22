import './App.css';
import {naver} from 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID';

function App() {
  const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10
  }

  const map = new naver.maps.Map('map', mapOptions);

  return (
    <div className="App">
      <h1>지도 실습</h1>
      {map}
    </div>
  );
}

export default App;
