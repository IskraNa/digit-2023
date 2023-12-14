import React from "react";
import Product from "./product";
import { useState } from "react";
import { useEffect } from "react";
import data  from '../../db/db.json'
const Menu = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setProducts(data.data)
    },[])

    console.log(products)
  
    return (
        <div className="row w-75 mx-auto my-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {products.map(product => (
             <Product key={product.id} {...product} className="col mb-2"/>
            ))}
        </div>
      );
}
export default Menu;
