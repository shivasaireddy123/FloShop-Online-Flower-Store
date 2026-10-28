import './index.css'
import Header from '../Header'
const Home = () => {
return(
    <div>
        <Header />
     <div className="home-container">
      <p className="welcome-text">Welcome to Florist</p>

      <h1 className="main-heading">
        Let's Make Beautiful Flowers a Part of Your Life.
      </h1>

      <p className="description">
        Explore a vibrant tapestry of blooms and arrangements that add color,
        fragrance, and elegance to your life. Discover the perfect floral
        expression for every moment and occasion.
      </p>

      <button className="shop-btn">Shop Now</button>
    </div>
    </div>
)
}
export default Home
