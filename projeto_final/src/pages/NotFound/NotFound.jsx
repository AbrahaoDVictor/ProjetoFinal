import { useNavigate } from "react-router-dom";

export const NotFound =()=> {
    const navigate = useNavigate();

    return (
        <div>
            <h1>404: PAGE NOT FOUND</h1>
            <button onClick={()=> navigate("/login")}>BACK TO HOME</button>
        </div>
    )
}