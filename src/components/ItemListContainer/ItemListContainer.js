import "./ItemListContainer.css";
import ItemPrevContainer from "../ItemPrevContainer/ItemPrevContainer";
import { Link } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = (list) => {
    const {items} = list;

    return (
        <div className="ItemListContainer">            
            {items.map((item) => {
                return (
                    <div key={item.id}>
                        <Link to={`/detail/${item.id}`} className="ItemDiv">
                            <ItemPrevContainer item={item} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemListContainer;