import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import About from './component/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enable or not.

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled!", "success");

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled!", "success");

    }
  }

  return (
    <>
     <Router>
      {/* <Navbar title="Textutils" aboutText="About us"  /> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar/> */}

      <Alert alert={alert} />
      <div className="container my-3">
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route exact path="/">
        <TextForm showAlert={showAlert} heading="Enter the text to analyize" mode={mode} />
          </Route>
        </Switch>
      </div>
      </Router>

    </>
  );
}

export default App;
