import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

const DetailPage = () => {
  const [item, setItem] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_BASE_URL}/${id}`).then((json) =>
      setItem(json.data)
    );
  }, [id]);

  return (
    <div className="container-xxl" key={id}>
      <div className="row justify-content-center mt-4">
        {item.id ? <ItemDetailContainer item={item} /> : null}
      </div>
    </div>
  );
};

export default DetailPage;
