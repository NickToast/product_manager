import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Product from './components/Product';
import Dashboard from './views/Dashboard';
import Edit from './components/Edit';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>

      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/products/:id' element={<Product/>}></Route>
        <Route path='/products/:id/edit' element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
