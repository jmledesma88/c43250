import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import {collection, query, getDocs, where} from "firebase/firestore";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";


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
            setItems(docs);
        };
        getItems();
    }, [categoryId]);


    // Pasar las iniciales a mayúsculas
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
                <ItemListContainer items={items}/>
            </div>
        </div>
    );
};

export default CategoryPage;
