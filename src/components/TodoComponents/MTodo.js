import React from 'react'
import Sidebar from './Sidebar'
import Main from './Main'
import User from './User'
import AddNewTodo from './AddNewTodo'
import Projects from './Projects'
import Todos from './Todos'
import EditTodo from './EditTodo'
import './MTodo.css'
import Calender from './Calender'

function MTodo() {
  return (
    <div className='MTodo'>
      <Sidebar>
        <User/>
        <AddNewTodo/>
        <Calender/>
        <Projects/>
      </Sidebar>
      <Main>
        <Todos/>
        <EditTodo/>
      </Main>
    </div>
  )
}

export default MTodo