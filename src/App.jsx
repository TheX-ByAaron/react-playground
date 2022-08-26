import './styles/App2.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Users } from './pages/Users';
import { Profile } from './pages/Profile';


function App() {

  return (
    <BrowserRouter>
      <nav className='navigation'>
        <Link to="/" className="link">Home</Link>
        <Link to="/users" className="link">User List</Link>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/profile/:idUser" element={<Profile />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App;
