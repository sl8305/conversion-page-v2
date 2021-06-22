import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className='content'>
        <div className='description'>
          <h1>Description</h1>
          <p>Here users can convert between temperature, length, weight and volume between the US and Metric system.  The return values will be to the second decimal point. Conversion tables are provided help show the user how the results were calculated. </p>
        </div>

        <div className='buttonGroup'>
          <button className='apple'> Temperature </button>
          <button> Weight </button>
          <button> Length </button>
          <button> Volume </button>
        </div>

        <div className='target'></div>

      </div>

      <Footer/>
    </div>
  );
}

export default App;
