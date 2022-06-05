import { Routes, Route } from 'react-router-dom'
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Layout from './components/layout/layout';
import Login from './containers/Login'
function App() {
  return (

    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/login' element={<Login />} />
    </Routes>

  );
}

export default App;
