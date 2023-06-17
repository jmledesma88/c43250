import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import {Link} from "react-router-dom";

const CategoryPage = () => {
  const [items, setItems] = useState([]);

  let { categoryId } = useParams();

  let filteredItems = items.filter((item) => {
    return item.category === categoryId;
  });

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}`).then((json) =>
      setItems(json.data)
    );
  }, []);

  const titleStringArray = categoryId
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");

  return (
    <div className="container-xxl">
      <div className="row text-center">
        <h1 className="mt-3">{titleStringArray}</h1>
      </div>
      <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 justify-content-center">
        {filteredItems.map((item) => {
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

export default CategoryPage;
