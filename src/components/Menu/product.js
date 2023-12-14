import React from 'react';
import { Link } from 'react-router-dom';
import GramsSlider from '../GramsComponent/gramsslider';
// import { useState } from 'react';
// import { useEffect } from 'react';

const Product = ({ id, name, price, imageUrl, category, ingredients, grams, quantity}) => (
    <div className="card m-3 p-3" style={{ width: "18rem"}}>
    <img className="card-img-top img-fluid border border-dark img-cover fixed-size-image" src={imageUrl} alt={name} width={18} height={18} />
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
        console.log('Category:', {category});
        console.log('Price:', {price});
      <p className="card-text">
        Состојки: {ingredients.map((ingredient, index) => (
          <span key={index}>{ingredient}{index !== ingredients.length - 1 && ', '}</span>
        ))}
      </p>
      <GramsSlider category={category}></GramsSlider>
      <div className="mb-3">
          <label className="form-label">Количина: </label>
          <input
            type="number"
            className="form-control"
            id={`quantityInput${id}`}
            defaultValue={1}
          />
        </div>
      <Link to="/" className="btn btn-primary">Купи</Link>
    </div>
  </div>
);

export default Product;