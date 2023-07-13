import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import { Link } from "react-router-dom";

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
        <div>
            <div>
                <h1>{titleStringArray}</h1>
            </div>
            <div>
                {filteredItems.map((item) => {
                    return (
                        <div key={item.id}>
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
