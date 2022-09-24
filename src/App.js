import './App.css';
import Header from './components/header/header';
import NavBar from './components/navbar/navbar';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <NavBar />
        <Profile />
      </main>
    </div>
  );
}

export default App;
