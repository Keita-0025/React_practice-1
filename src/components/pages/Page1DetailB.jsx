import { useNavigate } from "react-router-dom";
export const Page1DetailB = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page1DetailBページです</h1>
      <br />
      <button onClick={() => navigate(-1)}>戻る</button>
    </div>
  )
}