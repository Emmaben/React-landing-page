import './App.css';
import Homepage from './Components/Homepage';
import About from "./Components/About";
import Work from "./Components/Work"
import Testimonials from './Components/Testimonial';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Homepage />
      <About />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
