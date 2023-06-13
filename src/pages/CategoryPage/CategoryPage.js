// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// // import CardUser from "../../components/CardUser/CardUser";

// const Category = () => {
//   const [chars, setChars] = useState([]);

//   let { categoryId } = useParams();

//   console.log("categoryId", categoryId);
//   console.log("chars", chars);

//   let filteredCharacters = chars.filter((char) => {
//     return char.species === categoryId;
//   });

//   console.log("filteredCharacters", filteredCharacters);

//   useEffect(() => {
//     axios(`${process.env.REACT_APP_BASE_URL}`).then((json) =>
//       setChars(json.data.results)
//     );
//   }, []);

//   return (
//     <div className="Cards-List">
//       {filteredCharacters.map((char) => {
//         return (
//           <div style={{ margin: 10 }} key={char.id}>
//             <CardUser char={char} />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default Category;
