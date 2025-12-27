import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Homeページです</h1>
      <button onClick={() => navigate("/page1")}>Page1</button>
    </div>
  )
}