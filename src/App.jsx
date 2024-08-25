import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx';
import KodePage from './pages/KodePage.jsx';

function App() {

  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/kode' element={<KodePage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
