import './index.css'
import {Link,useNavigate} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = () => {
    const navigate = useNavigate()
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login', {replace: true})
  }
return(
    <div className="main-div">
        <h1 className='head1'>Flo<span className='head'>Shop</span></h1>
        <ul className='unorder'>
            <li><Link to='/' className='home'>Home</Link></li>
            <li><Link to='/about'className='about'>About</Link></li>
            <li><Link to='/shop'className='shop'>Shop</Link></li>
            <li><Link to='/contact'className='contact'>Contact</Link></li>
        </ul>
        <div className='div'>
            <a href=""><span id="icon" class="material-symbols-outlined">shopping_cart</span></a>
            <div className='Btn'>
                <button className='btn1' onClick={onClickLogout}>Logout</button>
            </div>
            
        </div>
    </div>
)
}
export default Header
