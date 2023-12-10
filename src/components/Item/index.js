import { useState } from "react";
import "./item.css";

const Item = ({ itemData, setCartPrice }) => {
  const [totalPrice, setTotalPrice] = useState(itemData.price);
  const [isBought, setIsBought] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = e.target.value;
    setQuantity(newQuantity);
    const newTotalPrice = itemData.price * newQuantity;
    setTotalPrice(newTotalPrice);
  };

  const handleAddToCart = () => {
    setIsBought(true);
    setCartPrice((prevCartPrice) => prevCartPrice + totalPrice);
  };

  const handleRemoveFromCart = () => {
    setIsBought(false);
    setCartPrice((prevCartPrice) => prevCartPrice - totalPrice);
    setTotalPrice(itemData.price);
    setQuantity(1);
  };

  return (
    <div className="item">
      <div className="item-image">
        <img src={itemData.imgUrl} className="resp-img" />
      </div>
      <p>
        <b>Name:</b>
        {itemData.name}
      </p>
      <div>
        <b>Description:</b>
        <p>{itemData.description}</p>
      </div>
      {isBought ? (
        <>
          <p>
            <button onClick={handleRemoveFromCart}>Remove from cart</button>
          </p>
          <p>
            <b>Total Price:</b>
            {totalPrice}$
          </p>
        </>
      ) : (
        <>
          <p>
            <b>Price:</b>
            {itemData.price}$
          </p>
          <p>
            <input
              type="number"
              className="item-price"
              defaultValue={1}
              min={1}
              value={quantity}
              onChange={handleQuantityChange}
            />
          </p>
          <p>
            <b>Total Price:</b>
            {totalPrice}$
          </p>
          <p>
            <button onClick={handleAddToCart}>Add to cart</button>
          </p>
        </>
      )}
    </div>
  );
};

export default Item;
