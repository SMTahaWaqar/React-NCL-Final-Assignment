import axios from 'axios';
import { useEffect, useState} from 'react';
import './App.css';
import TestExample from './components/Home';
import NavigationBar from './components/Navbar';
import Login from './components/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import Status from './components/Status';


function App() {

  const [info, setInfo] = useState();

  const [loginData, setLoginData] = useState(false);

  const getData = () => {
    axios.get("http://localhost:8080/data")
    .then(res => {
      const displayInfo = res.data;
      setInfo(displayInfo);
    })
    .catch(err => console.error(err))
  }

  const sendLoginData = (loginData) => {
    setLoginData(loginData)
  }

  useEffect(() => {
    getData();
  }, [])
  

  if (!loginData) {
    return(
    <Login sendLoginData={sendLoginData}/>
  )
  }
  else {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route exact path="/" element={<TestExample info={info}/>} />
        <Route exact path="/login" element={<Login sendLoginData={sendLoginData}/>} /> 
      </Routes>
    </BrowserRouter>
  );
}
}

export default App;