import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const HomePage = () => {
  return (
    <div className="container-xxl">
      <h1 className="text-center mt-3">Home</h1>
      <ItemListContainer />
    </div>
  );
};

export default HomePage;