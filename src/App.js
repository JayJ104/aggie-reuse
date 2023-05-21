import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';

import Homepage from './Pages/JS/Homepage';

function App() {
  return (
    <div>
      <Routes>
        <Route path ="/" element={<Homepage/>}></Route>
        <Route path ="/2" element={<div>hello</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;