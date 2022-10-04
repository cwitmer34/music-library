import { useEffect, useState, useRef } from "react";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import { DataContext } from "./context/DataContext";
import { SearchContext } from "./context/SearchContext";
import "./App.css";

function App() {
  let [search, setSearch] = useState("");
  let [message, setMessage] = useState("Search for music!");
  let [data, setData] = useState([]);
  let searchInput = useRef("");
  document.title = "Music Gallery";

  const API_URL = "https://itunes.apple.com/search?term=";

  const handleSearch = (e, term) => {
    e.preventDefault();
    const fetchData = async () => {
      document.title = `Music Gallery - ${term}`;
      const response = await fetch(API_URL + search);
      const resData = await response.json();
      if (resData.results.length > 0) {
        setData(resData.results);
      } else {
        setMessage("Not found");
      }
    };
    fetchData();
  };

  return (
    <div className="App">
      <SearchContext.Provider
        value={{
          term: searchInput,
          handleSearch: handleSearch,
        }}
      >
        <SearchBar />
      </SearchContext.Provider>
      {message}
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>
    </div>
  );
}

export default App;
