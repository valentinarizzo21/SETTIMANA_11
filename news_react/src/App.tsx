import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import PrincipalComponent from './components/PrincipalComponent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PrincipalComponent/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
