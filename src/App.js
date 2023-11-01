import './App.css';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Flag from './components/flag/flag';


function App() {
  return (
    <div className="App">
      <div className="Sidebar">
        <Sidebar />
      </div>
      {/* <div className="App-header"> */}
      {/* <Header /> */}
      <Flag />
      {/* </div> */}


    </div>
  );
}

export default App;
