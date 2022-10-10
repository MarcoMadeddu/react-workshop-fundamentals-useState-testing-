import {Product} from '../Models/Product';
import ProductCardImage from './ProductCardImage';
import { useState } from 'react';

export default function ProductCardBody (prod:Product){
  console.log(prod.title);
    function gotoWebSite(){
        window.open(prod.brand);
    }

    const [color,setColor] = useState("https://imgprd19.hobbylobby.com/5/ba/61/5ba610f22c7cd6efb4e6c69387d938451a6c40e6/700Wx700H-633719-0320.jpg");

    function changeColor (color:string) {
      return setColor(color);
    }

 
    const colors = {...prod};
    colors.image = color;
    return(
        <>
        <ProductCardImage {...colors}></ProductCardImage>
        <div className="card-header">{prod.title}</div>
          <div className="card-body">
            <h5 className="card-title">COLOR: <span className="color-box" style ={{backgroundColor: "red"}} onClick = { () => changeColor("https://imgprd19.hobbylobby.com/5/ba/61/5ba610f22c7cd6efb4e6c69387d938451a6c40e6/700Wx700H-633719-0320.jpg")}/></h5>
            <h5 className="card-title">COLOR: <span onClick = { () => changeColor("https://www.mdtextile.com/images/stories/virtuemart/product/foursquare-160gsm-roundneck-royalblue-tshirt8.jpg")} className="color-box" style ={{backgroundColor: "blue"}}/></h5>
            <h5 className="card-title">GENDER: {prod.gender === 'M'? 'Male' : 'Female'}</h5>
            <h5 className="card-title">PRICE: € {prod.price}</h5>
            <h5 className="card-title">
              <span>SIZE: </span>
              <span className="sizes">
                <span className={prod.size === 'M'? 'size-available' : ''}>M</span>-
                <span className={prod.size === 'L'? 'size-available' : ''}>L</span>-
                <span className={prod.size === 'XL'? 'size-available' : ''}>XL</span>
              </span>
            </h5>
            <p className="card-text">{prod.gender === 'M'? `${prod.description} Male` : `${prod.description} Female`}</p>
           {prod.returnAvailable ? <p>You can return the prod within 30 days</p> :  <p>Its not possibile to return this prod.</p>}
            
            <a onClick={gotoWebSite} className="btn btn-primary">Visit WebSite</a>
          </div>
          </>
    )   
}