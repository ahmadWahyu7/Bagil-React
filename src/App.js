import './Styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Navigation from './Components/Navigation';
import JoinGroup from './Components/AturAdil/JoinGroup';
import Contact from './Components/Contact';
import StartGroup from './Components/AturAdil/StartGroup';
import AturAcak from './Components/AturAcak';
import Dashboard from './Components/AturAdil/Dashboard';
import FormGroup from './Components/AturAdil/FormGroup';
import ResultGroup from './Components/AturAdil/ResultGroup';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ResultZero from './Components/AturAdil/ResultZero';
import ResultOne from './Components/AturAdil/ResultOne';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/startgroup' element={<StartGroup/>} />
          <Route path='/joingroup' element={<JoinGroup/>} />
          <Route path='/aturacak' element={<AturAcak/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/formgroup' element={<FormGroup/>} />
          <Route path='/resultgroup' element={<ResultGroup/>} />
          <Route path='/resultgroup0' element={<ResultZero/>} />
          <Route path='/resultgroup1' element={<ResultOne/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
