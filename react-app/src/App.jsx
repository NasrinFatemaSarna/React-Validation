
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Registration from './pages/Registration'
import EmailLogin from './pages/EmailLogin'
import EmailRegistration from './pages/EmailRegistration'
import GoogleSign from './pages/GoogleSign'
import Account from './pages/Account'



function App() {


  return (

    <div>

     


      <Routes>
    <Route path='/login' element={<Login />} />
    <Route path='/registration' element={<Registration />} />
    <Route path='/EmailLogin' element={<EmailLogin />} />
    <Route path='/EmailRegistration' element={<EmailRegistration />} />
    <Route path='/GoogleSign' element={<GoogleSign />} />
    <Route path='/Account' element={<Account />} />
   


 
   </Routes>

    </div>


   
  )
}

export default App
