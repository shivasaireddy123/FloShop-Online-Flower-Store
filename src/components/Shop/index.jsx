import Card from '../Card';
import Header from '../Header';
import './index.css';

const flowersList = [
  {
    id: 1,
    name: 'Rose Bouquet',
    price: 499,
    imageUrl:
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7',
  },
  {
    id: 2,
    name: 'Tulip Collection',
    price: 699,
    imageUrl:
      'https://images.unsplash.com/photo-1526045612212-70caf35c14df',
  },
  {
    id: 3,
    name: 'Sunflower Basket',
    price: 799,
    imageUrl:
      'https://images.unsplash.com/photo-1470509037663-253afd7f0f51',
  },
  {
    id: 4,
    name: 'Lily Bouquet',
    price: 599,
    imageUrl:
      'https://images.unsplash.com/photo-1468327768560-75b778cbb551',
  },
  {
    id: 5,
    name: 'Orchid Basket',
    price: 999,
    imageUrl:
      'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735',
  },
  {
    id: 6,
    name: 'Pink Roses',
    price: 699,
    imageUrl:
      'https://images.unsplash.com/photo-1496065187959-7f07b8353c55',
  },
  {
    id: 7,
    name: 'White Lily',
    price: 899,
    imageUrl:
      'https://images.unsplash.com/photo-1501004318641-b39e6451bec6',
  },
  {
    id: 8,
    name: 'Mixed Bouquet',
    price: 1299,
    imageUrl:
      'https://images.unsplash.com/photo-1462275646964-a0e3386b89fa',
  },
]

const Shop = () => {
  return (
    <>
    <Header />
    <div className="shop-container">
      <h1>Flower Collection</h1>

      <div className="cards-container">
        {flowersList.map(eachFlower => (
          <Card key={eachFlower.id} flower={eachFlower} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Shop;