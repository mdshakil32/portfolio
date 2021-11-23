import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Banner from './Pages/Banner/Banner';
import Contact from './Pages/Contact/Contact';
import MyWorks from './Pages/MyWorks/MyWorks';
import Navigation from './Pages/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <MyWorks></MyWorks>
      <Contact></Contact>
    </div>
  );
}

export default App;
