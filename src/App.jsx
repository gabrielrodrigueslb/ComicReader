import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Comic from './pages/Comic';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/comic/:id" element={<Comic/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
