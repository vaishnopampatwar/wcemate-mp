import { Add } from "@material-ui/icons";
import React, { useEffect } from "react";
import "../css/SidebarOptions.css";
import { useState } from "react";
import Feed from "./Feed";
import { useNavigate } from "react-router-dom";



function SidebarOptions() {
  const navigate = useNavigate();
  const [cat, setCat] = useState("questions");

  return (
    <div className="sidebarOptions">

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
          alt=""
        />
        <button onClick={() => navigate(`/doubt/${"questions"}`)}>All questions</button>
      </div>
      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
          alt=""
        />
        <button onClick={() => navigate(`/doubt/${"academics"}`)}>Academics </button>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt=""
        />

        <button onClick={() => navigate(`/doubt/${"club"}`)}>Club</button>
      </div>
      {/* <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
          alt=""
        />
        <button onClick={() => navigate(`/doubt/${"sports"}`)}>Sports</button>
        
      </div> */}

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt=""
        />
        <button onClick={() => navigate(`/doubt/${"Placement"}`)}>Placements</button>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
          alt=""
        />
        <button onClick={() => navigate(`/doubt/${"DSA"}`)}>DSA</button>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg"
          alt=""
        />
        <button onClick={() => navigate(`/doubt/${"Mess"}`)}>Mess</button>
      </div>




      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
          alt=""
        />
        <button onClick={() => navigate(`/doubt/${"scholarship"}`)}>Scholerships</button>
      </div>
{/* 
      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
          alt=""
        />
        <button>Entertainment</button>
      </div> */}

      { /* <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
          alt=""
        />
        <p>Internship</p>
      </div>*/}
    </div>
  );
}

export default SidebarOptions;


// import { Add } from "@material-ui/icons";
// import React from "react";
// import "../css/SidebarOptions.css";

// function SidebarOptions() {
//   return (
//     <div className="sidebarOptions">
//       <div className="sidebarOption">
//         <img
//           src="https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg"
//           alt=""
//         />
//         <p>Academics</p>
//       </div>

//       <div className="sidebarOption">
//         <img
//           src="https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
//           alt=""
//         />

//         <p>Club</p>
//       </div>
//       <div className="sidebarOption">
//         <img
//           src="https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg"
//           alt=""
//         />
//         <p>Art</p>
//       </div>

//       <div className="sidebarOption">
//         <img
//           src="https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
//           alt=""
//         />
//         <p>Sports</p>
//       </div>

//       <div className="sidebarOption">
//         <img
//           src="https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
//           alt=""
//         />
//         <p>Placements</p>
//       </div>

//       <div className="sidebarOption">
//         <img
//           src="https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
//           alt=""
//         />
//         <p>DSA</p>
//       </div>

//       <div className="sidebarOption">
//         <img
//           src="https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg"
//           alt=""
//         />
//         <p>Mess</p>
//       </div>

//       <div className="sidebarOption">
//         <img
//           src="https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
//           alt=""
//         />
//         <p>Scholerships</p>
//       </div>

//       <div className="sidebarOption">
//         <img
//           src="https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg"
//           alt=""
//         />
//         <p>Entertainment</p>
//       </div>

//       <div className="sidebarOption">
//         <img
//           src="https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
//           alt=""
//         />
//         <p>Internship</p>
//       </div>
//     </div>
//   );
// }

// export default SidebarOptions;
