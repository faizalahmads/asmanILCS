import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx';
import KodePage from './pages/KodePage.jsx';
import InventarisPage from './pages/InventarisPage.jsx';

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/kode' element={<KodePage />} />
          <Route path='/inventaris' element={<InventarisPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
