import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css";

import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

import { db } from "../../firebase/firebaseConfig";
import {
    collection,
    query,
    getDocs,
    where,
    documentId,
} from "firebase/firestore";

const DetailPage = () => {
    const [selectedItem, setSelectedItem] = useState([]);


    let { id } = useParams();

    useEffect(() => {
        const getItem = async () => {
            const q = query(
                collection(db, "items"),
                where(documentId(), "==", id)
            );
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setSelectedItem(docs);
        };
        getItem();
    }, [id]);

    return (
        <div className="DetailPage">
            {selectedItem.map((item) => {
                return (
                    <div key={item.id}>
                        <ItemDetailContainer item={item} />
                    </div>
                );
            })}
        </div>
    );
};

export default DetailPage;
