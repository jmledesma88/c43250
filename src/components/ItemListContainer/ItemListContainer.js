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
    <div className="container-xxl">
      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 justify-content-center">
        {items.map((item) => {
          return (
            <div key={item.id} className="col d-flex m-3">
              <Link to={`/detail/${item.id}`}>
                <ItemDetailContainer item={item} />
              </Link>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;