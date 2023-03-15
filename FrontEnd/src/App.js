import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './components/Allroutes';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <ToastContainer />
    </div>
  );
}


export default App;
