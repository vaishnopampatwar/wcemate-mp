import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import Homepage from "./components/Homepage";
import Qa from "./components/Qa";
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Workdo from "./components/Workdo";
import MainContest from "./components/MainContest";
import Errorpage from "./components/Errorpage";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./firebase";
import Todo from "./components/TodoComponents/MTodo";


function App() {  
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]); 
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar/>
         { user ? 
         <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path="/doubt/:type" element={<Qa/>} />
          <Route path="/work" element={<Todo/>} />
          <Route exact path="/compete" element={<MainContest/>} />
          {/* <Route exact path="/login" element={<Login/>} /> */}
          <Route element={<Errorpage/>}/>
          </Routes>
          :<Login/>}
      </div>
    </BrowserRouter>
  );
}

export default App;
