import styles from "./Header.module.css"
function Header(){
    return(
        <header className={styles.header}>
            <h1 className={styles.title}>Giphy Search</h1>
            <p>with</p>
            <a href="https://giphy.com" target="__blank" className={styles.link}><img src="https://images.hindustantimes.com/tech/img/2020/05/15/960x540/Facebook-buys-Giphy-the-popular-GIF-platform-for-400-million-will-be-integrated-into-Instagram_1589569838873_1589569839140.jpg"></img></a>
        </header>
    )
}
export default Header;