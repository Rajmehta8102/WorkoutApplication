import {BrowserRouter , Routes , Route , Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Navbar from './components/Navbar';
function App() {

  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
        <Route path="/" element={user ? <Home/> : <Navigate to ="/login"/>}/>
        <Route path="/signUp" element={!user ? <SignUp/> : <Navigate to="/"/>}
        />
        <Route path="/login" element={!user ? <Login/>:<Navigate to= "/" />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
