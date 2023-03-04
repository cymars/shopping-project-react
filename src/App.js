
import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import { BrowserRouter as Router, Route, Routes}  from "react-router-dom";

function App() {
  return (
    <div className="container">

<Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing/>} />
        <Route> 404 Not Found </Route>
      </Routes>
  </Router>
    </div>
  );
}

export default App;
