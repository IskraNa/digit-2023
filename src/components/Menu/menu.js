import React from "react";
import Product from "./product";
import { useState } from "react";
import { useEffect } from "react";
import data  from '../../db/db.json'
import { Link } from "react-router-dom";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartList, setCartList] = useState([]);

  const cartLength = cartList.length;

  useEffect(() => {
    setProducts(data.data);
  }, []);

  const sortItems = () => {
    let sortedItems = [...data.data];

    if (selectedCategory !== "all") {
      sortedItems = sortedItems.filter((item) => item.category === selectedCategory);
    }

    sortedItems.sort((a, b) => {
      if (sortOrder) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setProducts(sortedItems);
  };

  const handleSortOrderChange = (ascending) => {
    setSortOrder(ascending);
    sortItems();
  };

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    setSortOrder(true);

    setProducts((prevProducts) => {
      if (newCategory === "all") {
        return data.data;
      } else {
        let sortedItems = data.data.filter((item) => item.category === newCategory);

        sortedItems.sort((a, b) => {
          if (sortOrder) {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });

        return sortedItems;
      }
    });
  };

  const addToCart = (product) => {
    setCartList((prevCart) => [...prevCart, product]);
    console.log(product);
  };

  const removeFromCart = (index) => {
    setCartList((prevCart) => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
  }


  return (
    <div>
      <div className="m-5 row d-flex align-items-center fs-5">
        <div className="col-md-2">
          <label className="m-1 p-2">
            <input
              type="radio"
              name="sortOrder"
              value="ascending"
              checked={sortOrder}
              onChange={() => handleSortOrderChange(true)}
             />
              Највисока цена
          </label>
        </div>
        <div className="col-md-4">
          <label className="m-1 p-2">
            <input
              type="radio"
              name="sortOrder"
              value="descending"
              checked={!sortOrder}
              onChange={() => handleSortOrderChange(false)}
            />
            Најниска цена
          </label>
        </div>
        <div className="col-md-6 p-2 order-md-first ">
          <label>
            Селектирај категорија:
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="all">Сите</option>
              <option value="Мрсно">Мрсно</option>
              <option value="Посно">Посно</option>
              <option value="Пијалок">Пијалок</option>
              <option value="Салата">Салата</option>
              <option value="Благо">Благо</option>
            </select>
          </label>
        </div>
        </div>

        <div className="row w-75 mx-auto my-5 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {products.map((product) => (
            <Product key={product.id} {...product} onAddToCart={addToCart} className="col mb-2" />
          ))}
        </div>
        <div className="col-md-4">
          <div className="cart-container position-fixed top-0 end-0 p-3 cartList" id="sectionToNavigate">
          {cartLength > 0 && (
            <div className="cart-container">
              <h2>Кошничка</h2>
              <ul>
                {cartList.map((item, index) => (
                  <li key={index}>
                    {item.name} - {item.price}ден. x {item.quantity}
                    <button className="btn btn-danger btn-sm ms-2" onClick={() => removeFromCart(index)}>
                    Отстрани
                  </button>
                  </li>
                ))}
              </ul>
              <Link className="btn btn-success btn-sm ms-2" to="/order">Нарачај</Link>
            </div>
          )}
          </div>
        </div>
    </div>
  );
      };
export default Menu;
