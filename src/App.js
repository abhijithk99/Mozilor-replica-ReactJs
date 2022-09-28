import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Users from './components/Users'
import Products from './components/Products';
import Awards from './components/Awards';
import Clients from './components/Clients';
import Teams from './components/Teams';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Users/>
      <Products/>
      <Awards/>
      <Clients/>
      <Teams/>
      <Footer/>
    </>
  );
}

export default App;
