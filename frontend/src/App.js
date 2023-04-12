import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Home from "./routes/Home";
import Shop from "./routes/Shop"
import Schemes from "./routes/Schemes";
import Helpdesk from "./routes/Helpdesk"

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/schemes" element={<Schemes />} />
          <Route exact path="/helpdesk" element={<Helpdesk />} />

          {/* <Route path="/quiz" element={<Quiz/>} /> */}
         
        </Routes>

    </Router>
  );
}

export default App;
