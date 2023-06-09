import InnerApp from "./InnerApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Auth from "./Auth";
import "./index.css";
import Layout from "./Layout";
import NewNode from "./NewNode";
import NodeDet from "./NodeDet";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/Auth" element={<Auth />} />
        <Route element={<RequireAuth />}>
          <Route exact path="/check" element={<InnerApp />} />
          <Route exact path="/" element={<Layout />} />
          <Route exact path="/New" element={<NewNode />} />
          <Route exact path="/List/:unique_id" element={<NodeDet />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
