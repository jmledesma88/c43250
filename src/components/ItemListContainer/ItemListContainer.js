import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import {Link} from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}`).then((json) => {
      setItems(json.data);
    });
  }, []);

  return (
      <div className="ItemListContainer">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <ItemDetailContainer item={item} />
              </Link>
              
            </div>
          );
        })}
    </div>
  );
};

export default ItemListContainer;