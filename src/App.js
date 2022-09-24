import './App.css';
import Header from './components/header/header';
import Navigate from './components/navigate/navigate';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigate />
      <Profile />
    </div>
  );
}

export default App;
