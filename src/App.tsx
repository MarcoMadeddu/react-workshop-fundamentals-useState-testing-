import React from 'react';
import {Product} from './Models/Product'
import ProductCard from './Components/ProductCard'
import './App.css';


const product:Product = {
  title: "Coat Boss",
  image: 'https://www.w3schools.com/howto/img_avatar.png',
  description: 'Beatiful and elegant coat for your amazing wedding event',
  size: 'L',
  gender: 'M',
  color: '#666',
  price: 15,
  brand: 'http://www.google.com',
  returnAvailable: false
}

const product2:Product = {
  title: "TShirt",
  image: 'https://www.mdtextile.com/images/stories/virtuemart/product/foursquare-160gsm-roundneck-royalblue-tshirt8.jpg',
  size: 'L',
  gender: 'M',
  color: 'red',
  price: 200,
  description: 'Beatiful Tshirt for',
  brand: 'http://www.microsoft.com',
  returnAvailable: false
}

function App() {
  return (
    <>
    <ProductCard {...product}></ProductCard>
    <ProductCard {...product2}></ProductCard>
    </>
  );
}

export default App;