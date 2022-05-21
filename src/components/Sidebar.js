import React, { useState } from "react";
import SidebarOptions from "./SidebarOptions";
import "../css/Sidebar.css";
import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";

import Modal from 'react-modal'
import { Avatar, Button, Input } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import db from "../firebase";
import { ExpandMore, Link } from "@material-ui/icons";
import firebase from "firebase";
import Feed from "./Feed";
Modal.setAppElement("#root");

function Sidebar() {
  /*const c= document.getElementById("category");*/
  /*const categry=c.value;*/
  /*console.log(categry);*/
  const [categry, choosecategry] = useState();
  const user = useSelector(selectUser)

  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const questionName = input;

  <Feed
    category="categry" />
  const handleQuestion = (e) => {
    e.preventDefault();
    setIsModalOpen(false);

    if (questionName) {
      db.collection("questions").add({
        user: user,
        question: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        upvote: 0,
        downvote: 0
      });
      db.collection(categry).add({
        user: user,
        question: input,
        imageUrl: inputUrl,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        upvote: 0,
        downvote: 0
      });
    }

    setInput("");
    setInputUrl("");
  };
  return (
    <div className="sidebar">
      <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
      <Modal
        isOpen={IsmodalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        shouldCloseOnOverlayClick={false}
        style={{
          overlay: {
            width: 700,
            height: 600,
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: "1000",
            top: "50%",
            left: "50%",
            marginTop: "-300px",
            marginLeft: "-350px",
          },
        }}
      >
        <div className="modal__title">
          <h5>Add Question</h5>
        </div>
        <div className="modal__info">
          <Avatar
            className="avatar"
            src={
              user.photo
                ? user.photo
                : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
            }
          />
          <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
          {/* <div className="modal__scope">
            <PeopleAltOutlinedIcon />
            <p>Public</p>
            <ExpandMore />
          </div> */}
        </div>
        <div className="modal__Field">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Start your question with 'What', 'How', 'Why', etc. "
          />
          <div className="modal__fieldLink">
            <Link />
            <input
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              type="text"
              placeholder="Optional: inclue a link that gives context"
            ></input>

          </div>
          <br></br>
          <label>select query type</label>
          <select name="category" id="category" defaultValue="none" onChange=
            {(e) => choosecategry(e.target.value)}>
            <option value="academics" selected>Academics </option>
            <option value="Placement">Placement </option>
            <option value="club">Clubs </option>
            <option value="scholarship">Scholarship </option>
            <option value="DSA">DSA </option>
            <option value="Mess">Mess </option>
            {/* <option value="sports">Sports </option> */}
          </select>
          <h3> selected: {categry} </h3>

        </div>
        <div className="modal__buttons">
          <button className="cancle" onClick={() => setIsModalOpen(false)}>
            Cancel
          </button>
          <button type="sumbit" onClick={handleQuestion} className="add">
            Add Question
          </button>
        </div>
      </Modal>
      <SidebarOptions />
    </div>
  );
}

export default Sidebar;

// import React , { useState }from "react";
// import SidebarOptions from "./SidebarOptions";
// import "../css/Sidebar.css";
// import PeopleAltOutlinedIcon from "@material-ui/icons/PeopleAltOutlined";

// import Modal from 'react-modal'
// import { Avatar, Button, Input } from "@material-ui/core";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";
// import db from "../firebase";
// import { ExpandMore, Link } from "@material-ui/icons";
// import firebase from "firebase";
// Modal.setAppElement("#root");

// function Sidebar() {
//   const [categry,choosecategry]=useState();
//   const user = useSelector(selectUser)

//     const [IsmodalOpen, setIsModalOpen] = useState(false);
//     const [input, setInput] = useState("");
//     const [inputUrl, setInputUrl] = useState("");
//     const questionName = input;

//     const handleQuestion = (e) => {
//         e.preventDefault();
//         setIsModalOpen(false);
    
//         if (questionName) {
//           db.collection("questions").add({
//             user: user,
//             question: input,
//             imageUrl: inputUrl,
//             timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//           });
//         }
       
//         setInput("");
//         setInputUrl("");
//       };
//   return (
//     <div className="sidebar">
//       <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
//           <Modal
//             isOpen={IsmodalOpen}
//             onRequestClose={() => setIsModalOpen(false)}
//             shouldCloseOnOverlayClick={false}
//             style={{
//               overlay: {
//                 width: 700,
//                 height: 600,
//                 backgroundColor: "rgba(0,0,0,0.8)",
//                 zIndex: "1000",
//                 top: "50%",
//                 left: "50%",
//                 marginTop: "-300px",
//                 marginLeft: "-350px",
              

//               },
//             }}
//           >
//             <div className="modal__title">
//               <h5>Add Question</h5>
//             </div>
//             <div className="modal__info">
//               <Avatar
//                 className="avatar"
//                 src={
//                   user.photo
//                     ? user.photo
//                     : "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
//                 }
//               />
//               <p>{user.disPlayName ? user.disPlayName : user.email} asked</p>
//               {/* <div className="modal__scope">
//                 <PeopleAltOutlinedIcon />
//                 <p>Public</p>
//                 <ExpandMore />
//               </div> */}
//             </div>
//             <div className="modal__Field">
//               <Input
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 type="text"
//                 placeholder="Put your Question here "
//               />
//               <div className="modal__fieldLink">
//                 <Link />
//                 <input
//                   value={inputUrl}
//                   onChange={(e) => setInputUrl(e.target.value)}
//                   type="text"
//                   placeholder="Optional: inclue a link that gives context"
//                 ></input>
//               </div>
//               <br></br>
//              <label>select query type</label>
//              <select name="category" id="category" defaultValue="none" onChange=
//                {(e)=>choosecategry(e.target.value)}>
//                <option value="academics" selected>Academics </option>
//                <option value="Placement">Placement </option>
//                <option value="Club">Clubs </option>
//                <option value="Scholarship">Scholarship </option>
//                <option value="DSA">DSA </option>
//                <option value="Mess">Mess </option>
//              </select>
//             <h3> selected: {categry} </h3>
              
//             </div>
//             <div className="modal__buttons">
//               <button className="cancle" onClick={() => setIsModalOpen(false)}>
//                 Cancel
//               </button>
//               <button type="sumbit" onClick={handleQuestion} className="add">
//                 Add Question
//               </button>
//             </div>
//           </Modal>
//       <SidebarOptions />
//     </div>
//   );
// }

// export default Sidebar;