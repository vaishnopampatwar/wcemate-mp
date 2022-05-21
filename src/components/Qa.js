import React, { useState } from 'react';
import '../css/Qa.css'
import Feed from './Feed';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useParams } from "react-router";

function Qa(props) {
  // const location = useLocation();
  // console.log("infohere",location.state.info);
  let {type}=useParams();

  const [postCategry, setPostCategry] = useState(type);
  useEffect(() => {
    console.log(type);
    // if(location.state )
    // {
    //   setPostCategry(location.state );  
    // }
  },[type])

  return (
    <div className='Qa'>
      <div className="qa__content">
        {/* <Sidebar postCategry={postCategry} setPostCategry={setPostCategry}/>
        <Feed postCategry={postCategry} setPostCategry={setPostCategry}/> */}
        <Sidebar />
        {/* <Feed/> */}
        <Feed info={type} />
        {/* <Feed info={postCategry? postCategry : location.state} /> */}
      </div>
    </div>
  )
}
export default Qa;


// import React from 'react';
// import '../css/Qa.css'
// import Feed from './Feed';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';

// function Qa() {
//   return (
//   <div className='Qa'>
//       <div className="qa__content">
//         <Sidebar/>
//         <Feed />
//       </div>
//   </div>
//   )
// }
// export default Qa;
