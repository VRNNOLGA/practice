import image from './plan.jpg';
import './App.css';
import { List } from './List';

function App() {
  return (
    <div className='container'>
      <img src={image} width= "100%"  alt='plan'/>
      <List />
    </div>
  );
}
export default App;


