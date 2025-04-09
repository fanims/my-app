import { Fragment } from 'react'
import './index.css'
import Header from './components/header/Header'
import TodoList from './components/todolist/TodoList'
import StudentRecord from './components/studentrecord/StudentRecord'
import Invoice from './components/invoice/Invoice'
import InvoiceGpt from './components/invoice/InvoiceGpt'

function App() {

  return (
    <Fragment>
        <Header/>
        <div className='container p-8'>
          <TodoList/>
          <StudentRecord/>
          <Invoice/>
          <InvoiceGpt/>
        </div>
    </Fragment>
  )
}

export default App
