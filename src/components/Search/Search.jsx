import styles from "./Search.module.css"
import { useState } from "react";
function Search({ onSearch }) {
    const [input, setInput] = useState('');
  
    function handleSubmit(e) {
      e.preventDefault();
  
      onSearch(input);
    }
  
    return (
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="search"
          placeholder="Search Gifs..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.button}>Search</button>
      </form>
    );
  }
export default Search;