import { DefaultLayout } from "../templates/DefaultLayout";
import { useNavigate, Link } from "react-router-dom";
import { useState, useCallback } from "react";
import { ChildArea } from "../atoms/ChildArea";

export const Example = () => {
    const navigate = useNavigate();
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
  };
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]);
  return (
    <DefaultLayout>
    <button onClick={() => navigate("/page1")}>Page1</button>
        <div className="App">
          <Link to="/">Home</Link>
          <br />
          <Link to="/page1">Page1</Link>
          <br />
          <Link to="/page2">Page2</Link>
        </div>
        <div className="App">
          <input value={text} onChange={onChangeText} />
          <br />
          <br />
          <button onClick={onClickOpen}>表示</button>
          <ChildArea open={open} onClickClose={onClickClose} />
        </div>
    </DefaultLayout>
  )
}