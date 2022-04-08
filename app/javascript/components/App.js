import React from "react";
import { Route, Routes } from "react-router-dom";
import Helpdesk from "./Helpdesk";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Helpdesk />} />
      {/* <Route path="/articles/:id" element={<Article />} />
      <Route path="/groups/:id" element={<Group />} /> */}
    </Routes>
  );
};

export default App;
