
import React, { useEffect, useState } from "react"; 
import "../css/Feed.css";
import Post from "./Post";
import db from "../firebase";

function Feed(props) {
  console.log("pp",props.info);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log(props, "hihh");
    db.collection(props ? props.info :"questions")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            questions: doc.data(),
          }))
        )
      );
      console.log();
  }, [props.info]);

  return (
    <>
     <div className="feed">
      {posts.map(({ id, questions }) => (
        <Post
          key={id}
          Id={id}
          question={questions.question}
          imageUrl={questions.imageUrl}
          timestamp={questions.timestamp}
          users={questions.user}
        />
      ))}
    </div>
      
    </>
  );
}

export default Feed;

// import React, { useEffect, useState } from "react"; 
// import "../css/Feed.css";
// import Post from "./Post";
// import db from "../firebase";

// function Feed() {
//    const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     db.collection("questions")
//       .orderBy("timestamp", "desc")
//       .onSnapshot((snapshot) =>
//         setPosts(
//           snapshot.docs.map((doc) => ({
//             id: doc.id,
//             questions: doc.data(),
//           }))
//         )
//       );
//   }, []);

//   return (
//     <div className="feed">
//       {/* <QaBox /> */}
//       {posts.map(({ id, questions }) => (
//         <Post
//           key={id}
//           Id={id}
//           question={questions.question}
//           imageUrl={questions.imageUrl}
//           timestamp={questions.timestamp}
//           users={questions.user}
//         />
//       ))}
//     </div>
//   );
// }

// export default Feed;
