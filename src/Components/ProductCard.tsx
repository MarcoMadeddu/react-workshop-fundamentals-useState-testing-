import {Product} from '../Models/Product';
import ProductCardBody from './ProductCardBody';

export default function ProductCard(prod:Product){
    return (
        <div className="container mt-2" style={{ maxWidth: 400}}>
        <div className="card" style={{borderColor: prod.gender === 'M' ? 'blue' : 'pink'}}>
        <ProductCardBody {...prod}></ProductCardBody>
        </div>
      </div>
    )
}