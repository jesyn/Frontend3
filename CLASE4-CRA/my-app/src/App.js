//import logo from './logo.svg';
//import happy1 from '../public/img/satisfied.png';

import './App.css';

const happy = "https://raw.githubusercontent.com/Ivanszs/dh-frontend3-clases/master/clase-4/satisfied.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={happy} className="App-logo" alt="logo" />
        <img src='logo192.png' alt="logo"/>
      </header>
    </div>
  );
}

export default App;

