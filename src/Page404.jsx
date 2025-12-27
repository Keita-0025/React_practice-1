import { useNavigate } from "react-router-dom";
export const Page404 = () => {
    const navigate = useNavigate();
    return (
        <div>
      <h1>このページは存在しません</h1>
      <button onClick={() => navigate("/")}>Home</button>
      </div>
    );
};