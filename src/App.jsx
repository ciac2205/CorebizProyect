
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import Form from './Components/Form';
import Footer from './Components/Footer';
import { useState} from "react";

function App() {
// Para guardar en el localStorage
  const data =  JSON.parse(localStorage.getItem('count') || 0);
  
  const [count, setCount] = useState(data);

  const add = async () => {
    setCount(count+1)
    localStorage.setItem('count',JSON.stringify(count+1));
    console.log(data)
  
  }

  return (
    <div className="App">
      <Header numberCount={count} />
      <Hero />
      <Cards addCount={add} />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
