import { Route, Routes } from 'react-router-dom'
// pages
import Home from './pages/Home'
// components
import { Layout } from './components/layouts/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route />
      </Route>
    </Routes>
  )
}

export default App
