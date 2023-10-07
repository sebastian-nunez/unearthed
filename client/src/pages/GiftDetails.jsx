import React, { useState, useEffect } from "react";
import "./GiftDetails.css";
import { useLocation } from "react-router-dom";

const GiftDetails = ({ data }) => {
  const location = useLocation();
  const [gift, setGift] = useState({
    id: 0,
    name: "",
    pricepoint: "",
    audience: "",
    image: "",
    description: "",
    submittedby: "",
    submittedon: ""
  });

  const fetchGiftById = async () => {
    const id = location.pathname.split("/").pop();

    const response = await fetch(`/api/gifts/${id}`);
    const json = await response.json();
    setGift(json);
  };

  useEffect(() => {
    fetchGiftById();
  }, []);

  return (
    <div className="GiftDetails">
      <main id="gift-content" class="gift-info">
        <div class="image-container">
          <img id="image" src={gift.image} />
        </div>
        <div class="gift-details">
          <h2 id="name">{gift.name}</h2>
          <p id="submittedBy">{"Submitted By: " + gift.submittedby}</p>
          <p id="pricePoint">{"Price: " + gift.pricepoint}</p>
          <p id="audience">{"Great For: " + gift.audience}</p>
          <p id="description">{gift.description}</p>
        </div>
      </main>
    </div>
  );
};

export default GiftDetails;
