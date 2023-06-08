import InnerApp from "./InnerApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Auth from "./Auth";
import "./index.css";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/Auth" element={<Auth />} />
        <Route element={<RequireAuth />}>
          <Route exact path="/check" element={<InnerApp />} />
          <Route exact path="/" element={<Layout />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
