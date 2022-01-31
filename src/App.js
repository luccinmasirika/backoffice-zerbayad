import { NewProduct } from 'components';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './screens/dashboard/';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/new-product' element={<NewProduct />} />
    </Routes>
  );
}

export default App;
