import './App.css';
import icon from './assets/logo.svg';
import {Card} from './card/Card';


function App() {
  return (
    <div className="App">
    <img src={icon} className='icon' />
    <Card/>
  </div>
  );
}

export default App;
