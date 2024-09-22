
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
<>
<Navbar title="TextChanger" homeText="Home" aboutText="About us"/> {/*This is made using props*/}
<div className="container my-3">
  <TextForm heading="Enter your Text here!!"/>
  </div>   
</>
  );
}

export default App;
 