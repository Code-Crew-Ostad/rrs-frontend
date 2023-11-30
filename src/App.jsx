import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/home-page'
import LoginPage from './pages/login-page'
import VerifyPage from './pages/verify-page'
import RegisterPage from './pages/register-page'
import RestaurantDetailsPage from './pages/restaurant-details';
import ReserveTable from './components/Restaurant/ReserveTable'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify/:email" element={<VerifyPage />} />
        <Route path="/details" element={<RestaurantDetailsPage/>} />
        <Route path="/reserve" element={<ReserveTable/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
