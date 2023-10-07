import "./App.css";
import React, { useState, useEffect } from "react";
import { useRoutes } from "react-router-dom";
import Gifts from "./pages/Gifts";
import GiftDetails from "./pages/GiftDetails";
import PageNotFound from "./pages/PageNotFound";
import { Link } from "react-router-dom";
import CreateGift from "./pages/CreateGift";
import EditGift from "./pages/EditGift";

const App = () => {
  const [gifts, setGifts] = useState([]);

  const fetchGifts = async () => {
    const res = await fetch("/api/gifts");
    const data = await res.json();
    setGifts(data);
  };

  useEffect(() => {
    fetchGifts();
    console.log(gifts);
  }, []);

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <Gifts data={gifts} />
    },
    {
      path: "/gift/:id",
      element: <GiftDetails data={gifts} />
    },
    {
      path: "/new",
      element: <CreateGift />
    },
    {
      path: "/edit/:id",
      element: <EditGift data={gifts} />
    },
    {
      path: "/*",
      element: <PageNotFound />
    }
  ]);

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <div className="header-left">
            <img src="/logo.png" />
            <h1>UnEarthed</h1>
          </div>
          <div className="header-right">
            <Link to="/">
              <button className="homeBtn">Home</button>
              <Link to="/new">
                <button className="addBtn">+ Add Gift</button>
              </Link>
            </Link>
          </div>
        </div>
      </header>

      {element}
    </div>
  );
};

export default App;
