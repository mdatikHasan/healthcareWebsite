import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Booking from './components/Booking/Booking';
import Doctors from './components/Doctors/Doctors';
import Header from './components/Header/Header';
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Login from './components/Login/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shops from './components/Shops/Shops';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/home" element={<Home></Home>} />
          <Route path="/services" element={<Services></Services>} />
          <Route path="/shops" element={<PrivateRoute><Shops></Shops></PrivateRoute>}/>
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/booking/:serviceId" element={<PrivateRoute><Booking></Booking></PrivateRoute>}/>
          <Route path="/about" element={<PrivateRoute><About></About></PrivateRoute>} />
          <Route path="/doctor" element={<Doctors></Doctors>}/>
          <Route path="*"element={<NotFound></NotFound>}/>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;