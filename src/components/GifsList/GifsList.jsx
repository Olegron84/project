import styles from "./GifsList.module.css"
import GifItem from "../GifItem/GifItem";
function GifsList({ gifs }) {
  return (
    <div className={styles.gifs}> 
      {gifs.map((gif) => (
        <a href={gif.url} target="_blank" className={styles.gif_a} title="Натисніть, щоб перейти на оф. сайт">
          <GifItem gif={gif} className={styles.gif} />
        </a>
      ))}
    </div>
  );
}
export default GifsList;
