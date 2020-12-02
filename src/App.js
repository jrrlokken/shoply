import Navbar from './Navbar';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <h1>Welcome to Shoply</h1>
        <Routes />
      </div>
    </div>
  );
}

export default App;
