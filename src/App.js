import { useSelector } from 'react-redux';
import './App.css';
import Home from './Home';
import Login from './Login';
import {selectUser} from './slice/userSlice.js';
function App() {
  const user=useSelector(selectUser)
  return (
    <div className="App">
      {
        !user? <Login/>:<Home />
      }
    </div>
  );
}

export default App;
