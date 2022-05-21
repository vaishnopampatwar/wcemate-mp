// import React from 'react'
// import Navbar from './Navbar'

// function Home() {
//   return (
//     <>
//     <div>Home</div>
//     </>
//   )
// }

// export default Home
import React from "react";
import '../css/Homepage.css'
import homeimg from './wce.jpg'

export default function Homepage() {
  return (
    <div classname="hp" style={{ backgroundColor:"#fff"  }}>
      
      
      <img src={homeimg} className="homeimg" alt="BigCo Inc. logo"/>
      <div class="quote">
        "A place to share knowledge and better understand the world"
        <br />
      </div>
      <div class="home">
        
        <div class="desc">
          Welcome to <span class="dec">WCE Mate!</span>
          <br />
          <br />
          Our app has 3 amazing components that will make your college life much
          much easier!
          <ul class="a">
            <li class="b">
              An <span class="dec">AnyDoubt</span> where in you can ask all
              your Query that you want to ask senior or mentor
            </li>
            <li class="b">
              An <span class="dec">To do List</span> to track all your
              work.It will help you to plan your day accordingly. No more
              waiting for the start of work !
            </li>
            <li class="b">
              Oh damn i missed this contest again!! Ever been through this? Dont
              worry we got you covered with our{" "}
              <span class="dec">Contest Tracker App</span> that will give you
              the list of all the ongoing as well as upcoming contests in so
              that you wont miss any contests!
            </li>
          </ul>
        </div>
      </div>
      <footer>
        Made by <br />
         <span className="teamName">@VSV</span>
      </footer>
    </div>
  );
}