import NavBar from './Components/NavBar';
import Banner from './Components/Banner';
import Skills from './Components/Skills';
import Project from './Components/Project';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Banner/>
     <Skills/>
     <Project/>
     <Contacts/>
     <Footer/>
    </div>
  );
}

export default App;
