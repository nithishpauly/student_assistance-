import { useState } from 'react'
import '..//admin/admin.css'
// import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Adminhome from './Adminhome'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Adminhome />

    </div>
  )
}

export default App