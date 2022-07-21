import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import HomePage from "./components/HomePage";
import NoPage from "./components/NoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={< HomePage />} />
        <Route exact path='/*' element={< NoPage />} />
      </Routes>
    </Router>

  );
}

export default App;
