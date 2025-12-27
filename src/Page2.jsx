import { Link } from "react-router-dom";
export const Page2 = () => {
  return (
    <div>
      <h1>Page2ページです</h1>
      <Link to="/page2/222">URL Parameter</Link>
      <br />
      <Link to="/page2/222?name=test">URL Parameter</Link>
      
    </div>
  );
};
