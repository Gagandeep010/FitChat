import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      {/* Add other components here */}
      {/* <About />
      
      <Testimonials />
      <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
