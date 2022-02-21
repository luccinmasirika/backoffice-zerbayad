import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './screens/dashboard/';
import {
  AuthRoute,
  Login,
  P404,
  ProtectedRoute,
} from 'components';
import {NewProduct} from 'screens'

function App() {
  return (
    <Routes>
    <Route element={<AuthRoute />}>
      <Route path='/login' element={<Login />} />
    </Route>
    <Route element={<ProtectedRoute />}>
      <Route index element={<Dashboard />} />
      <Route path='/' element={<Dashboard />} />
      <Route path='/products' element={<Dashboard />} />
      <Route path='/new-product' element={<NewProduct />} />
      <Route path='*' element={<P404 />} />
    </Route>
  </Routes>
  );
}

export default App;
