import Header from './Header';
import './App.css';
import Images from './Images';
import Mid from './Mid';
import Cards from './images/Cards';

function App() {
  return (
    <div>
      <div className='o'>
        <Header />
      </div>
      <br></br>
      <Images />
      <div class='containertt'>
        {' '}
        <Mid />
      </div>
      <Cards />
    </div>
  );
}

export default App;
