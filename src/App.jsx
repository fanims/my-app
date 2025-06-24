import { Fragment } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Navbar from './components/header/Navbar'
import TodoList from './components/todolist/TodoList'
import StudentRecord from './components/studentrecord/StudentRecord'
import Invoice from './components/invoice/Invoice'
import Sidebar from './components/sidebar/Sidebar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sidebar/>
  },
  {
    path: "/",
    element: <TodoList/>
  },
  { 
    path: "/student",
    element: <StudentRecord/>
  },
  {
    path: "/invoice",
    element: <Invoice/>
  },
])

function App() {
  return (
    <Fragment>
      <RouterProvider router={router}>
        <div className='flex h-screen'>
          <Sidebar/>
          <div className='w-full'>
            <Navbar/>
            <div className='container p-8'>
              <RouterProvider router={router} />
            </div>
          </div>
        </div>
      </RouterProvider>
    </Fragment>
  )
}

export default App
