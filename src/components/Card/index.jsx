import './index.css';

const Card = ({ flower }) => {
  return (
    <div className="card">
      <img src={flower.imageUrl} alt={flower.name} />

      <h3>{flower.name}</h3>

      <p>₹{flower.price}</p>

      <button>Add To Cart</button>
    </div>
  );
};

export default Card;