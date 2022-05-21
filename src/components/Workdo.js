import React ,{useState,useEffect}from 'react'
import db from '../firebase'
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
//import useHistory from 'react-router-dom'

let unsubscribe =()=>{}
export default function Workdo() {
  const user = useSelector(selectUser);
  const[text,setText] = useState('')
  const[mytodos,setTodos] = useState([])
  
  
  useEffect(()=>{
    if(user){
      const docRef = db.collection('todos').doc(user.uid)
       unsubscribe = docRef.onSnapshot(docSnap=>{
      if(docSnap.exists){
        console.log(docSnap.data().todos)
        setTodos(docSnap.data().todos)
      }else{
        console.log("no docs")
      }
    })
    }
    return()=>{
      unsubscribe()
    }
  },[])
  
  
  
  const addTodo = ()=>{
    db.collection('todos').doc(user.uid).set({
      todos:[...mytodos,text]
    })
  }

  const deleteTodo = (deleteTodo)=>{
    const docRef = db.collection('todos').doc(user.uid)
    docRef.get().then(docSnap=>{
      const result = docSnap.data().todos.filter(todo => todo !== deleteTodo)
      docRef.update({
        todos:result
      })})
  }
  return (
    <div className='container'>
      <h1>Add Todo</h1>
      <div className="inputField">
                <input type="text"
                  placeholder="Add Todos"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
              <button className="btn blue" onClick={()=>addTodo()}>Add</button>
              <ul className= "collection">
                {mytodos.map(todo=>{
                   return <li className="collection-item" key={todo}>
                   {todo}
                   <button className="btn blue" onClick={()=>deleteTodo(todo)}>delete</button>
                   </li>
                })

                }
              </ul>
    </div>

  )
}

