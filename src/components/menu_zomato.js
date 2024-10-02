import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backend_url } from '../constants/Urls';

const RestaurantMenu_Zomato = () => {
  const [menuData, setMenuData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(`${backend_url}/zomato-menu`); 
        const items = response.data.items;
        setMenuData(items);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMenu();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <div className="menu-container">
        {menuData.length > 0 ? (
          menuData.map((item, index) => (
            <div key={index} className="menu-item">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              {item.rating ? (
                <p>
                  Rating: {item.rating.value} ({item.rating.total_rating_text})
                </p>
              ) : (
                <p>Rating: Not Available</p>
              )}
              {item.image_url && <img src={item.image_url} alt={item.name} width="200" />}
            </div>
          ))
        ) : (
          <p>No items available</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu_Zomato;
