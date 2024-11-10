import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact={true} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// https://www.youtube.com/watch?v=dbcuhULYJMs&ab_channel=AdvancedUITechniques