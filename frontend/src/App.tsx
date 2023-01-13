import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// CONTEXT
import { useAuthContext } from './hooks/useAuthContext'
// PAGES & COMPONENTS
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import Layout from './components/Layout'

function App() {
  const { user } = useAuthContext()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={user ? <Home /> : <Navigate to="/login" />} />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
