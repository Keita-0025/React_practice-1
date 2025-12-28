import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Page1 } from "../components/pages/Page1";
import { Page2 } from "../components/pages/Page2";
import { Page1DetailA } from "../components/pages/Page1DetailA";
import { Page1DetailB } from "../components/pages/Page1DetailB";
import { UrlParameter } from "../urlprameter";
import { Page404 } from "../components/pages/Page404";
import { Users } from "../components/pages/Users";
import { UserDetails } from "../components/pages/UserDetails";
import { Example } from "../components/pages/Example";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page1/detailA" element={<Page1DetailA />} />
        <Route path="/page1/detailB" element={<Page1DetailB />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page2/:id" element={<UrlParameter />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/users" element={<Users />} />
        <Route path="/details" element={<UserDetails />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </BrowserRouter>
  );
};
