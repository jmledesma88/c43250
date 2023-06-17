import {useEffect} from "react";
import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/");
        }, 5000)
    }, [navigate])
  return (
    <div className="container-xxl text-center">
      <h1 className="mt-5">{"¯\\_(ツ)_/¯"}</h1>
      <h2>ERROR - Page not found...</h2>
      <h2>You'll be redirected to our Home Page soon.</h2>
      <button onClick={()=>navigate("/")}>Back to Home</button>
    </div>
  );
};

export default ErrorPage;