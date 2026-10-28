import {useContext} from 'react'
import {CartContext} from '../../Context'
import './index.css'

const Card = ({flower}) => {
  const {addToCart} = useContext(CartContext)

  return (
    <div className="card">
      <img src={flower.imageUrl} alt={flower.name} />

      <h3>{flower.name}</h3>

      <p>₹{flower.price}</p>

      <button type="button" onClick={() => addToCart(flower)}>Add To Cart</button>
    </div>
  )
}

export default Card
