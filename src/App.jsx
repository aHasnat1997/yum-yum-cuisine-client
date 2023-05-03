import { Outlet } from 'react-router-dom';
import './App.css'
import Nav from './components/Nav';
import Footer from './components/Footer';
import StayTop from './components/StayTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
      <StayTop />
      <Nav />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default App;
