import { Fragment } from 'react'
import './index.css'
import Header from './components/header/Header'
import BoxList from './components/main/BoxList'
import TodoList from './components/todolist/TodoList'
import StudentRecord from './components/studentrecord/StudentRecord'

function App() {

  return (
    <Fragment>
        <Header/>
        <div className='container'>
          {/* <BoxList/> */}
          <TodoList/>
          <StudentRecord/>
        </div>
    </Fragment>
  )
}

export default App
