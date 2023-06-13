import { useState, useEffect } from "react";
import axios from "axios";

import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [char, setChar] = useState({});

  let { id } = useParams();

  console.log(char);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/`).then((json) =>
      setChar(json.data)
    );
  }, [id]);

  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      {char.id ? <ItemDetailContainer char={char} /> : null}
    </div>
  );
};

export default DetailPage;