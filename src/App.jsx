import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import Contact from './components/Contact'
import LoginForm from './components/LoginForm'

const App = () => {
return(
    <BrowserRouter>
    <Routes>
        <Route path='/login' element={<LoginForm />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
)
}
export default App
