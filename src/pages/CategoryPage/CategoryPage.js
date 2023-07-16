import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";
import { Link } from "react-router-dom";

import { db } from "../../firebase/firebaseConfig";
import {collection, query, getDocs, where} from "firebase/firestore";


const CategoryPage = () => {
    const [items, setItems] = useState([]);

    let { categoryId } = useParams();

    useEffect(() => {
        const getItems = async () => {
            const q = query(collection(db, "items"), where ("category", "==", categoryId));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            console.log(docs);
            setItems(docs);
        };
        getItems();
    }, [categoryId]);

        
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
        </div>
    );
};

export default CategoryPage;
