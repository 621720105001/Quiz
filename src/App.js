import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Quiz from './Quiz';
import Question from './dataset/Question';
import Login from './Login';



function App(){
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path='/' element={<Quiz/>}/>
      <Route path='/question' element={<Question/>}/>
      <Route path='./login' element={<Login/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
