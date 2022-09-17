import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Aboutpage from './pages/about';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<Aboutpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
