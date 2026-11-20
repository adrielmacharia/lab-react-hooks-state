import React, { useState } from "react";

function PlantCard({ plant }) {
  // The API has no stock field, so sold-out status is tracked for this session.
  const [isSoldOut, setIsSoldOut] = useState(false);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {!isSoldOut ? (
        <button className="primary" onClick={() => setIsSoldOut(true)}>
          In Stock
        </button>
      ) : (
        <button disabled>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
