import { useState, useEffect } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import GifList from "./GifsList/GifsList";
import Search from "./Search/Search";
import Loader from "./Loader/Loader";
import Header from "./Header/Header";
let APIKEY = "iMLen1OdCKGK4m6OVyQIdF1D5UTer0dn";
const giphy = new GiphyFetch(APIKEY);
function App() {
  const [gifs, setgifs] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(true);
  function search_func(newInput) {
    setInput(newInput);
    setgifs([]);
  }
  useEffect(() => {
    if (input === '') {
      setLoading(false)
    }
    setLoading(true);
    giphy.search(input)
      .then((gifs) => {
        setgifs(gifs.data)
      })
    .finally(() => setLoading(false));
  }, [input]);
  return (
    <div>
      {loading&&<Loader />}
      <Header/>
      <div>
        <Search onSearch={search_func}/>
      </div>
      <GifList gifs={gifs} />
    </div>
  );
}

export default App;
