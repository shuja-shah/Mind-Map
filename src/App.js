import InnerApp from "./InnerApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route exact path="/*" element={<InnerApp />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
