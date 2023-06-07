import InnerApp from "./InnerApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import Auth from "./Auth";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/Auth" element={<Auth />} />
        <Route element={<RequireAuth />}>
          <Route exact path="/*" element={<InnerApp />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
