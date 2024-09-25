
import './App.css';
// import AboutTwo from './components/AboutTwo';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextChanger" homeText="Home" aboutText="About us" /> {/*This is made using props*/}
      <div className="container my-3">
        <TextForm heading={'Enter your text here'}/>
        {/* <AboutTwo title={"About Us"}/> */}
      </div>
    </>
  );
}

export default App;
