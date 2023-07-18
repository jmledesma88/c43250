import React from "react";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import Spinner from "../../components/Spinner/Spinner";

const HomePage = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getItems = async () => {
            const q = query(collection(db, "items"));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setItems(docs);
            setIsLoading(false);
        };
        getItems();
    }, []);
    console.log(items);

    return (
        <div>
            <h1>Home</h1>
            {isLoading ? (
                <Spinner />
            ) : items.length > 0 ? (
                <ItemListContainer items={items} />
            ) : null}
        </div>
    );
};

export default HomePage;
