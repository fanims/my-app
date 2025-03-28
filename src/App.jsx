import { Fragment } from 'react'
import './index.css'
import Header from './components/header/Header'
import BoxList from './components/main/BoxList'

function App() {

  return (
    <Fragment>
        <Header/>
        <div className='container'>
          <BoxList/>
        </div>
    </Fragment>
  )
}

export default App
