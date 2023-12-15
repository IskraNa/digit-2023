import React from 'react';
import GramsSlider from '../GramsComponent/gramsslider';
import { useState } from 'react';

const Product = ({ id, name, price, imageUrl, category, ingredients, onAddToCart}) => {

  const [quantity, setQuantity] = useState(1);
  const [grams, setGrams] = useState(100);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    console.log(event.target.value);
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    onAddToCart({ id, name, price, imageUrl, grams, quantity });
  };

  const handleGramsChange = (event) => {
    const newGrams = parseFloat(event.target.value, 10);
    setGrams(newGrams);
  }

  return(
    <div className="menu card m-3 p-3" style={{ width: "18rem"}}>
    <img className="card-img-top img-fluid border border-dark img-cover fixed-size-image image" src={imageUrl} alt={name} width={18} height={18} />
    <div className="card-body">
    <p className="card-text">{category}</p>
      <h5 className="card-title">{name}</h5>
      {category === 'Мрсно' || category === 'Посно' ? (
        <>
            <p className="card-text">Цена: {price}ден.</p>
            {category === 'Благо' ? (
            <p className="card-text">Цена: {price}ден./парче</p>
            ) : null}
        </>
        ) : (
            <p className="card-text">Цена: {price}ден.</p>
        )}
      <p className="card-text">
        Состојки: {ingredients.map((ingredient, index) => (
          <span key={index}>{ingredient}{index !== ingredients.length - 1 && ', '}</span>
        ))}
      </p>
      <GramsSlider category={category} onChange={handleGramsChange}></GramsSlider>
      <div className="mb-3">
          <label className="form-label">Количина: </label>
          <input
            type="number"
            className="form-control"
            id={`quantityInput${id}`}
            defaultValue={1}
            onChange={handleQuantityChange}
          />
        </div>
        <button className="btn btn-primary" onClick={handleAddToCart}>Купи</button>
    </div>
  </div>
 );
}

export default Product;