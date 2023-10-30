import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import About from './pages/About';
import { Route,Routes } from 'react-router-dom';
import StudentDetails from './pages/StudentDetails';
import Product from './pages/Product';
function App() {
  return (
  <>
    <Routes>
      <Route exact path="/" element={<Home></Home>}></Route>
      <Route exact path="/about" element={<About></About>}></Route>
      <Route exact path="/product" element={<Product></Product>}></Route>
      {/* <Route exact path="student-details/:roll/:xyz" element={<StudentDetails></StudentDetails>}></Route>
       */}
        <Route exact path="student-details/:roll/:xyz" element={<StudentDetails />}></Route>
    </Routes>
  </>
  );
}

export default App;
