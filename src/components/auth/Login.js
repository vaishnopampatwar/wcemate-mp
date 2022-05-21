import React, { useState } from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com"
const forgotPassword = (Email) => {
  console.log(Email);
   if(Email!="")
   {auth.sendPasswordResetEmail(Email)
       .then(function () {
           alert('Please check your email...')
       }).catch(function (e) {
        alert(e.message)
           console.log(e)
       }) 
     }
     else{
       alert('Enter Your Walchand Email')
     }
   }

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  let navigate = useNavigate();
  const signIn = () => {
    auth.signInWithPopup(provider).catch((e) => {
      alert(e.message);
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        alert("Successfully Login")
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };
  function randomStr(len, arr) {
    var ans = "";
    for (var i = len; i > 0; i--) {
      ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
  }
  const registerSignIn = (e) => {
    e.preventDefault();
    const pra=email;
    const regex = '.+@walchandsangli.ac.in';
    const found = pra.match(regex)
    const passw=randomStr(8,"123456789@ABC")
    if(found)
    {auth
      .createUserWithEmailAndPassword(email, passw)
      .then((auth) => {
        if (auth) {
          let obj = {
            email: email,
            pass: passw,
          };
          emailjs
            .send(
              "service_swoqc5d",
              "template_vzwteba",
              obj,
              "cBEHFn1_pWeqMdl-x"
            )
            .then(
              (result) => {
                console.log(result.text);
              },
              (error) => {
                console.log(error.text);
              }
            );
          console.log(auth);
          alert("Verification Email Successfully. Check Your inbox for Username and Password")
          navigate("/");
        }
      })
      .catch((e) => alert(e.message));}
      else{
        alert('Use Walchand Email Address For Registration')
      }
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__desc">
          <p>Meet-Collabrate-Learn-Grow</p> 
        </div>
        <div className="login__auth">
          <div className="login__emailPass">
            <div className="login__label">
              <h2>Login</h2>
            </div>
            <div className="login__inputFields">
              <div className="login__inputField">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="login__inputField">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="login__forgButt">
              
              <button onClick={handleSignIn}>Login</button>
              <button onClick={registerSignIn}>Register</button>
              <button onClick = {()=>forgotPassword(email)} style={{backgroundColor:"transparent"}}><small>Forgot Password?</small></button>
            </div>
            </div>            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
