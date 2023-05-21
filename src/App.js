import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';

import Homepage from './Pages/JS/Homepage';
import Add from './Pages/JS/AddtoStock';
import UpdateStock from './Pages/JS/UpdateStock';

function App() {
  return (
    <div>
      <Routes>
        <Route path ="/" element={<Homepage/>}></Route>
        <Route path ="/record-donation" element={<Add/>}></Route>
        <Route path='/checkout' element={<UpdateStock/>}></Route>
        <Route path ="/2" element={<div>hello</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
