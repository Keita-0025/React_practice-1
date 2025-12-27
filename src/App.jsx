import "./App.css";
import { useState, useCallback } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { ChildArea } from "./ChildArea";
import { Router } from "./router/Router";
function App() {
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
    <>
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link>
          <br />
          <Link to="/page1">Page1</Link>
          <br />
          <Link to="/page2">Page2</Link>
        </div>
        <Router />
      </BrowserRouter>
      <div className="App">
        <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
      </div>
    </>
  );
}

export default App;
