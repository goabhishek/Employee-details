import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './pages/Header';
import Data from './pages/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Data />} />
      {/* <Route path='/header' element={<Header />} /> */}
    </Routes>
  );
}

export default App;
