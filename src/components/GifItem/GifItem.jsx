import styles from "./GifItem.module.css";
function GifItem({gif}){
    const img_url = gif.images["fixed_width"].url
    return(
        <div  >
            <img src={img_url} className={styles.gif_img}/>
        </div>
    )
}
export default GifItem;