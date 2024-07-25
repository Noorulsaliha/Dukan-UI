import './App.css'
import { Overview } from './components/Overview'
import { SideBar } from './components/SideBar'
import { Table } from './components/Table'

import { TopBar } from './components/TopBar'
import { Transaction } from './components/Transactions'

function App() {
  return(
    <div>
    <SideBar/>  
    <div className='sm:pl-64 border-b'>
      <TopBar/>
    </div>
    <div className='m-5 mb-0 sm:ml-64 grid gap-8'>
      <Overview/>
      <div className='grid gap-6'>
        <Transaction/>
        <Table/>
      </div>
    </div>
    </div>
  )
}

export default App
