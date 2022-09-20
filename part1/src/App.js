import Mensaje from './Mensaje';
import './App.css';




const Mensaje2 = () => {
  return <h1>"Desarrollo de una página en React"</h1>;
}

const App = () => {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando'/>
      <Mensaje color='green' message='En un curso'/>
      <Mensaje color='blue' message='De React'/>
      <Mensaje2 />
      
    </div>
  );
}

export default App;
