import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import PrincipalComponent from './components/PrincipalComponent';
import ArticleDetails from './components/ArticleDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<PrincipalComponent/>} />
      <Route path='/article/:id' element={<ArticleDetails/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
