import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import Spinner from "../../components/Spinner/Spinner";

const CategoryPage = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let { categoryId } = useParams();

    useEffect(() => {
        setIsLoading(true);
        const getItems = async () => {
            const q = query(
                collection(db, "items"),
                where("category", "==", categoryId)
            );
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setItems(docs);
            setIsLoading(false);
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
                {isLoading ? (
                    <Spinner />
                ) : items.length > 0 ? (
                    <ItemListContainer items={items} />
                ) : null}
            </div>
        </div>
    );
};

export default CategoryPage;
