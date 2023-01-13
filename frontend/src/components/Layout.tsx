import { Outlet } from 'react-router-dom'
import Navbar from './styledComponents/StyledNavbar'

export default function Layout() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}
