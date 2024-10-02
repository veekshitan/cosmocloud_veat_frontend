import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { SWIGGY_SEARCH_URL } from "../constants/Urls";

function SearchBar() {
  const [query, setQuery] = useState("");
  const { latitude, longitude } = useSelector((state) => state.locationHandler);

  const handleSearch = () => {
    console.log(`You searched for: ${query}`);
    const params = {
      lat: latitude,
      lng: longitude,
      str: query,
    };

    const config = {
      method: "GET", // Specify the request method
      headers: {
        "Content-Type": "application/json",
        referrer: "no-referrer",
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
      },
    };

    fetch(
      "https://cors-anywhere.herokuapp.com/" +
        SWIGGY_SEARCH_URL +
        new URLSearchParams(params),
      config
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Parse JSON response
      })
      .then((data) => {
        console.log("API Response:", data); // Log the API response
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle any errors
      });
  };

  return (
    <div style={{ display: "flex", alignItems: "center", width: "300px" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        style={{
          flex: 1,
          padding: "10px",
          border: "1px solid #ccc",
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px",
          outline: "none",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "#fff",
          cursor: "pointer",
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
