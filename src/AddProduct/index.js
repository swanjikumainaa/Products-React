import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const AddProductForm = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          New Product's Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Product's price:          
        </label>
        <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        <br />
        <Link to={`/products/`} className="btn">
          <button type="submit">Add</button>
        </Link>
      </form>
    </div>
  );
};
export default AddProductForm;
