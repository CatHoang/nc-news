import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Articles from "./components/Articles";
import Hamburger from "./components/Hamburger";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
