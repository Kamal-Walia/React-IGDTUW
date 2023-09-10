import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import ClassComponent from './Components/ClassComponent'
import HooksComponent from './Components/HooksComponent';
import ErrorComponent from './Components/ErrorComponent';
import { Provider } from 'react-redux';
import store from './Store';
import StoreClassComponent from './Components/StoreClassComponent';
import StoreFunctionalComponent from './Components/StoreFunctionalComponent';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ClassComponent />} />
      <Route path='/hooks' element={<HooksComponent />} />
      <Route path='/storeClassComponent' element={<StoreClassComponent />} />
      <Route path='/storeFunctionalComponent' element={<StoreFunctionalComponent />} />
      <Route path='/*' element={<ErrorComponent />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;






