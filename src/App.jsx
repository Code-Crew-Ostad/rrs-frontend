import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/home-page'
import LoginPage from './pages/login-page'
import VerifyPage from './pages/verify-page'
import RegisterPage from './pages/register-page'
import RestaurantDetailsPage from './pages/restaurant-details';
import ReserveTable from './components/Restaurant/ReserveTable'
import RestMaster from './components/DashboardRest/RestMaster'
import Reservation from './components/DashboardRest/Reservation'
import Branch from './components/DashboardRest/Branch'
import Dashboard from './components/DashboardRest/Dashboard'
import Profile from './components/DashboardRest/Profile'
import Gallery from './components/DashboardRest/Gallery'
import Table from './components/DashboardRest/Table'

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
        {/* Restaurant Dashboard */}
        <Route path="/restaurant" element={<RestMaster />}>
          <Route path='/restaurant/dashboard' element={<Dashboard />}/>
          <Route path='/restaurant/reservation' element={<Reservation />}/>
          <Route path='/restaurant/profile' element={<Profile />}/>
          <Route path='/restaurant/branch' element={<Branch />}/>
          <Route path='/restaurant/gallery' element={<Gallery/>}/>
          <Route path='/restaurant/table' element={<Table/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
