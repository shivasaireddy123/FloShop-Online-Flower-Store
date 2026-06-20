import './index.css'
import Header from '../Header'
const About = () => {
return(
    <>
    <Header />
     <div className="about-page">
      <div className="about-banner">
        <h1>About FloShop</h1>
        <p>Bringing Nature's Beauty Into Every Celebration</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            FloShop is a premium online florist dedicated to creating
            unforgettable floral experiences. From elegant bouquets and
            handcrafted arrangements to seasonal flower collections, we help
            customers celebrate life's most precious moments with beauty and
            style.
          </p>

          <p>
            Founded with a passion for flowers and creativity, FloShop combines
            freshness, quality, and artistic design to deliver stunning floral
            arrangements that leave lasting impressions.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to spread happiness through flowers. We believe that
            every bloom tells a story, expresses emotions, and creates
            meaningful connections. Whether it's a birthday, anniversary,
            wedding, graduation, or a simple gesture of appreciation, our
            flowers help convey feelings that words often cannot.
          </p>
        </div>

        <div className="about-cards">
          <div className="info-card">
            <h3>🌷 Fresh Flowers</h3>
            <p>
              Carefully sourced from trusted growers to ensure exceptional
              freshness and quality.
            </p>
          </div>

          <div className="info-card">
            <h3>🚚 Fast Delivery</h3>
            <p>
              Reliable and timely delivery to make every special moment perfect.
            </p>
          </div>

          <div className="info-card">
            <h3>💐 Custom Designs</h3>
            <p>
              Personalized floral arrangements crafted by experienced florists.
            </p>
          </div>
        </div>

        <div className="about-section">
          <h2>Why Choose FloShop?</h2>
          <ul className="features-list">
            <li>Premium quality flowers and bouquets</li>
            <li>Affordable pricing for every occasion</li>
            <li>Unique floral arrangements and gift options</li>
            <li>Excellent customer support</li>
            <li>Safe and secure online shopping experience</li>
          </ul>
        </div>
      </div>
    </div>
    </>
)
}
export default About
