import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
        Hello world. Time to convert.
      </div>

      <Footer/>
    </div>
  );
}

export default App;
