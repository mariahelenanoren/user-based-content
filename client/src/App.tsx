import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./routes/layout";
import "./style/mediaQueries.css";
import "./style/style.css";

function App() {
  return (
    <Router>
    <Layout />
    </Router>
  );
}

export default App;
