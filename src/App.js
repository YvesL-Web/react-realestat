import './App.css';
// import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ListingScreen from './screens/ListingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <main className='py-3'>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/listing/:id' element={<ListingScreen />} />
          <Route path='/login/' element={<LoginScreen />} />
          <Route path='/register/' element={<RegisterScreen />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
