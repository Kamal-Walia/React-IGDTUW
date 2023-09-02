import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import ClassComponent from './Components/ClassComponent'
import HooksComponent from './Components/HooksComponent';
import ErrorComponent from './Components/ErrorComponent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ClassComponent />} />
      <Route path='/hooks' element={<HooksComponent />} />
      <Route path='/*' element={<ErrorComponent />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;






