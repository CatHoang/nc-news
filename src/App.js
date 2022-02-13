import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import { UserContext } from "./contexts/User";
import { useState } from "react";
import Comments from "./components/Comments";
import Error from "./components/Error";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: "jessjelly",
    name: "Jess Jelly",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/4/4f/MR_JELLY_4A.jpg/revision/latest?cb=20180104121141",
  });

  const isLoggedIn = loggedInUser !== null;

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{ loggedInUser, setLoggedInUser, isLoggedIn }}
      >
        <div className="App">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Articles />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/topics" element={<Articles />} />
              <Route path="/topics/:topic" element={<Articles />} />
              <Route path="/articles/:article_id" element={<SingleArticle />} />
              <Route
                path="/articles/:article_id/comments"
                element={<Comments />}
              />
              <Route path="/*" element={<Error />} />
            </Routes>
          </div>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
